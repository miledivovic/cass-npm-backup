const EcRemoteLinkedData = require("../../../../org/cassproject/schema/general/EcRemoteLinkedData");

/**
 *  Graph for working with a framework. Additional computed data (such as profile data) can be overlaid on the graph through the use of "metaverticies" and "metaedges" that hold additional information.
 *
 *  @author fritz.ray@eduworks.com
 *  @author tom.buskirk@eduworks.com
 *  @class EcFrameworkGraph
 */
module.exports = class EcFrameworkGraph extends EcDirectedGraph {
	constructor() {
		super();
		this.metaVerticies = {};
		this.metaEdges = {};
		this.competencyMap = {};
		this.edgeMap = {};
		this.dontTryAnyMore = {};
		this.frameworks = [];
	}
	metaVerticies = null;
	metaEdges = null;
	competencyMap = null;
	edgeMap = null;
	dontTryAnyMore = null;
	frameworks = null;
	addFrameworkSuccessCallback = null;
	addFrameworkFailureCallback = null;
	repo = null;
	/**
	 *  Adds a framework to the graph, and creates the edges to connect the competencies in the framework.
	 *
	 *  @param {EcFramework}     framework Framework to add to the graph.
	 *  @param {EcRepository}    repo Repository to fetch data from that exists in the framework.
	 *  @param {function()}      success Method to invoke when done adding the framework.
	 *  @param {function(error)} failure Method to invoke when things go badly.
	 *  @method addFramework
	 *  @memberOf EcFrameworkGraph
	 */
	async addFramework(framework, repo, success, failure) {
		this.frameworks.push(framework);
		if (framework.competency == null) framework.competency = [];
		if (framework.relation == null) framework.relation = [];
		await repo.multiget(
			framework.competency,
			async(data) => {
				await Promise.all(
					data.map((d) => this.handleCacheElement(d, framework))
				);
				await repo.multiget(
					framework.relation,
					async(data2) => {
						await Promise.all(
							data2.map((d2) =>
								this.handleCacheElement(d2, framework)
							)
						);
						success();
					},
					failure
				);
			},
			failure
		);
	}
	async handleCacheElement(d, framework) {
		if (d.isAny(new EcEncryptedValue().getTypes()))
			d = await EcEncryptedValue.fromEncryptedValue(d);
		if (d == null) return;
		if (d.isAny(new EcCompetency().getTypes())) {
			let c = new EcCompetency().copyFrom(d);
			if (c == null) return;
			this.addToMetaStateArray(
				this.getMetaStateCompetency(c),
				"framework",
				framework
			);
			this.addCompetency(c);
		} else if (d.isAny(new EcAlignment().getTypes())) {
			let alignment = new EcAlignment().copyFrom(d);
			if (alignment == null) return;
			await this.addRelation(alignment);
			this.addToMetaStateArray(
				this.getMetaStateAlignment(alignment),
				"framework",
				framework
			);
		}
	}
	/**
	 *  Helper method to populate the graph with assertion data, based on propagation rules implicit in the relations (see devs.cassproject.org, Relations). Does not draw conclusions. Must be able to decrypt 'negative' value.
	 *
	 *  @param {Assertion[]}     assertions Assertion candidates to use to populate the graph.
	 *  @param {function()}      success Method to invoke when the operation completes successfully.
	 *  @param {function(error)} failure Error method.
	 */
	async processAssertionsBoolean(assertions, success, failure) {
		await cassPromisify(
			Promise.all(
				assertions.map(async(assertion) => {
					if (!this.containsVertexById(assertion.competency)) {
						console.log("Could not find " + assertion.competency);
						return;
					}
					let negative = await assertion.getNegative();
					await this.processAssertionsBooleanPerAssertion(
						assertion,
						negative,
						await this.getCompetency(assertion.competency),
						[]
					);
				})
			),
			success,
			failure
		);
	}
	async processAssertionsBooleanPerAssertion(
		assertion,
		negative,
		competency,
		visited
	) {
		if (EcArray.has(visited, competency)) {
			return;
		}
		visited.push(competency);
		if (negative) {
			this.addToMetaStateArray(
				this.getMetaStateCompetency(competency),
				"negativeAssertion",
				assertion
			);
			await Promise.all(
				this.getOutEdges(competency).map((alignment) =>
					this.getCompetency(alignment.target).then((t) =>
						this.processAssertionBooleanOutward(
							alignment,
							t,
							assertion,
							negative,
							visited
						)
					)
				)
			).then(() =>
				Promise.all(
					this.getInEdges(competency).map((alignment) =>
						this.getCompetency(alignment.source).then((s) =>
							this.processAssertionBooleanInward(
								alignment,
								s,
								assertion,
								negative,
								visited
							)
						)
					)
				)
			);
		} else {
			this.addToMetaStateArray(
				this.getMetaStateCompetency(competency),
				"positiveAssertion",
				assertion
			);
			await Promise.all(
				this.getInEdges(competency).map((alignment) =>
					this.getCompetency(alignment.source).then((t) =>
						this.processAssertionBooleanOutward(
							alignment,
							t,
							assertion,
							negative,
							visited
						)
					)
				)
			).then(() =>
				Promise.all(
					this.getOutEdges(competency).map((alignment) =>
						this.getCompetency(alignment.target).then((s) =>
							this.processAssertionBooleanInward(
								alignment,
								s,
								assertion,
								negative,
								visited
							)
						)
					)
				)
			);
		}
	}
	async processAssertionBooleanOutward(
		alignment,
		c,
		assertion,
		negative,
		visited
	) {
		if (alignment.relationType == Relation.NARROWS)
			await this.processAssertionsBooleanPerAssertion(
				assertion,
				negative,
				c,
				visited
			);
		else if (alignment.relationType == Relation.IS_EQUIVALENT_TO)
			await this.processAssertionsBooleanPerAssertion(
				assertion,
				negative,
				c,
				visited
			);
	}
	async processAssertionBooleanInward(
		alignment,
		c,
		assertion,
		negative,
		visited
	) {
		if (alignment.relationType == Relation.REQUIRES)
			await this.processAssertionsBooleanPerAssertion(
				assertion,
				negative,
				c,
				visited
			);
		else if (alignment.relationType == Relation.IS_EQUIVALENT_TO)
			await this.processAssertionsBooleanPerAssertion(
				assertion,
				negative,
				c,
				visited
			);
	}
	addToMetaStateArray(metaState, key, value) {
		if (metaState == null) return;
		if (metaState[key] == null) metaState[key] = [];
		metaState[key].push(value);
	}
	/**
	 *  Fetches the Meta Competency (additional state information used to compute profiles or other data) for a competency.
	 *
	 *  @param {EcCompetency} c Competency to fetch meta state for.
	 *  @return Meta state (empty object by default)
	 *  @method getMetaStateCompetency
	 *  @memberOf EcFrameworkGraph
	 */
	getMetaStateCompetency(c) {
		var result = this.metaVerticies[c.shortId()];
		if (result === undefined || result == null) {
			if (this.containsVertex(c) == false) return null;
			if (this.metaVerticies[c.shortId()] == null)
				this.metaVerticies[c.shortId()] = result = {};
		}
		return result;
	}
	getMetaStateAlignment(a) {
		var result = this.metaEdges[a.shortId()];
		if (result == null) {
			if (this.containsEdge(a) == false) return null;
			if (this.metaEdges[a.shortId()] == null)
				this.metaEdges[a.shortId()] = result = {};
		}
		return result;
	}
	containsVertex(competency) {
		return this.competencyMap[competency.shortId()] != null;
	}
	containsVertexById(id) {
		return this.containsVertexByShortId(
			EcRemoteLinkedData.trimVersionFromUrl(id)
		);
	}
	containsVertexByShortId(shortId) {
		return this.competencyMap[shortId] != null;
	}
	containsEdge(competency) {
		return this.edgeMap[competency.shortId()] != null;
	}
	async getCompetency(competencyId) {
		var c = null;
		c = this.competencyMap[competencyId];
		if (c == null) c = await EcCompetency.get(competencyId);
		return c;
	}
	getCompetencySoft(competencyId) {
		var c = null;
		c = this.competencyMap[competencyId];
		return c;
	}
	addCompetency(competency) {
		if (competency == null) return false;
		if (this.containsVertex(competency)) return false;
		this.competencyMap[competency.shortId()] = competency;
		this.competencyMap[competency.id] = competency;
		return this.addVertex(competency);
	}
	async addRelation(alignment) {
		if (alignment == null) return false;
		if (this.containsEdge(alignment)) return false;
		var source = this.competencyMap[
			EcRemoteLinkedData.trimVersionFromUrl(alignment.source)
		];
		if (source == null && this.dontTryAnyMore[alignment.source] != null)
			return false;
		if (source == null) source = await this.getCompetency(alignment.source);
		if (source == null) this.dontTryAnyMore[alignment.source] = "";
		var target = this.competencyMap[alignment.target];
		if (target == null && this.dontTryAnyMore[alignment.target] != null)
			return false;
		if (target == null) target = await this.getCompetency(alignment.target);
		if (target == null) this.dontTryAnyMore[alignment.target] = "";
		if (source == null || target == null) return false;
		return this.addEdgeUnsafely(alignment, source, target);
	}
	addHyperEdge(edge, vertices) {
		throw new Error("Don't do this.");
	}
	getEdgeType(edge) {
		return edge.relationType;
	}
	getDefaultEdgeType() {
		return EcAlignment.NARROWS;
	}
};
