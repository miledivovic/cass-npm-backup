/**
 *  Implementation of a Framework object with methods for interacting with CASS
 *  services on a server.
 *
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class EcFramework
 *  @constructor
 *  @extends Framework
 */
module.exports = class EcFramework extends Framework {
	constructor() {
		super();
		var me = this;
		if (EcFramework.template != null) {
			var you = EcFramework.template;
			for (var key in you) {
				if (typeof you[key] != "function")
					me[key.replace("@", "")] = you[key];
			}
		}
	}
	static relDone = {};
	static levelDone = {};
	static template = null;
	equals(obj) {
		return this.isId(obj.id);
	}
	/**
	 *  Retrieves a framework from the server, specified by the ID
	 *
	 *  @param {String}                 id
	 *                                  ID of the framework to retrieve
	 *  @param {Callback1<EcFramework>} success
	 *                                  Callback triggered after successfully retrieving the framework,
	 *                                  returns the retrieved framework
	 *  @param {Callback1<String>}      failure
	 *                                  Callback triggered if an error occurs while retrieving the framework
	 *  @memberOf EcFramework
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new EcFramework(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves a framework from the server in a blocking fashion, specified by the ID
	 *
	 *  @param {String}                 id
	 *                                  ID of the framework to retrieve
	 *  @param {Callback1<EcFramework>} success
	 *                                  Callback triggered after successfully retrieving the framework,
	 *                                  returns the retrieved framework
	 *  @param {Callback1<String>}      failure
	 *                                  Callback triggered if an error occurs while retrieving the framework
	 *  @memberOf EcFramework
	 *  @method getBlocking
	 *  @static
	 *  @deprecated Use await on get()
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new EcFramework(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository given for frameworks using the query passed in
	 *
	 *  @param {EcRepository}                 repo
	 *                                        Repository to search for frameworks
	 *  @param {String}                       query
	 *                                        Query string used to search for a framework
	 *  @param {Callback1<Array<EcFramework>} success
	 *                                        Callback triggered when the search successfully returns,
	 *                                        returns search results
	 *  @param {Callback1<String>}            failure
	 *                                        Callback triggered if an error occurs while searching
	 *  @param {Object}                       paramObj
	 *                                        Parameter object for search
	 *  @memberOf EcFramework
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new EcFramework(),
			success,
			failure,
			paramObj
		);
	}
	/**
	 *  Adds the competency ID specified to the frameworks list of competency IDs
	 *
	 *  @param {String} id
	 *                  ID of the competency to add
	 *  @memberOf EcFramework
	 *  @method addCompetency
	 */
	addCompetency(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.competency == null) this.competency = [];
		for (var i = 0; i < this.competency.length; i++)
			if (
				EcRemoteLinkedData.trimVersionFromUrl(
					this.competency[i]
				).equals(id)
			)
				return;
		this.competency.push(id);
	}
	/**
	 *  Removes a competency ID from the framework's list, also removes any
	 *  levels and relations associated with that competency
	 *  <p>
	 *  TODO: remove rollup rules? should we add flag to remove these extras
	 *
	 *  @param {String}            id
	 *                             ID of the competency to remove
	 *  @param {Callback1<String>} success
	 *                             Callback triggered after succesfully removing the competency and levels and relationships
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs when removing competency and levels and relationships
	 *  @memberOf EcFramework
	 *  @method removeCompetency
	 */
	removeCompetency(id, success, failure) {
		var shortId = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.competency == null) this.competency = [];
		for (var i = 0; i < this.competency.length; i++)
			if (
				this.competency[i].equals(shortId) ||
				this.competency[i].equals(id)
			)
				this.competency.splice(i, 1);
		if (
			(this.relation == null || this.relation.length == 0) &&
			(this.level == null || this.level.length == 0)
		)
			if (success != null) {
				success("");
				return;
			}
		EcFramework.relDone[id] = false;
		EcFramework.levelDone[id] = false;
		if (this.relation != null) {
			this.removeRelationshipsThatInclude(
				id,
				0,
				function(p1) {
					if (EcFramework.levelDone[id]) {
						if (success != null) success(p1);
					} else {
						EcFramework.relDone[id] = true;
					}
				},
				failure
			);
		} else {
			EcFramework.relDone[id] = true;
		}
		if (this.level != null) {
			this.removeLevelsThatInclude(
				id,
				0,
				function(p1) {
					if (EcFramework.relDone[id]) {
						if (success != null) success(p1);
					} else {
						EcFramework.levelDone[id] = true;
					}
				},
				failure
			);
		} else {
			EcFramework.levelDone[id] = true;
		}
	}
	/**
	 *  Helper method to remove relationships associated with a competency from this framework
	 *
	 *  @param {String}            id
	 *                             ID of the competency being removed, to find relationships on
	 *  @param {int}               i
	 *                             recursive index parameter
	 *  @param {Callback1<String>} success
	 *                             Callback triggered after all relationships in the framework have been checked
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs looking through relationships
	 *  @memberOf EcFramework
	 *  @method removeRelationshipsThatInclude
	 *  @private
	 */
	removeRelationshipsThatInclude(id, i, success, failure) {
		var shortId = EcRemoteLinkedData.trimVersionFromUrl(id);
		var me = this;
		if (i >= this.relation.length && success != null) success("");
		else
			return EcAlignment.get(
				this.relation[i],
				async(a) => {
					if (
						a != null && a.source == shortId ||
						a.target == shortId ||
						a.source == id ||
						a.target == id
					) {
						me.relation.splice(i, 1);
						await me.removeRelationshipsThatInclude(
							id,
							i,
							success,
							failure
						);
					} else
						await me.removeRelationshipsThatInclude(
							id,
							i + 1,
							success,
							failure
						);
				},
				async(s) => {
					await me.removeRelationshipsThatInclude(
						id,
						i + 1,
						success,
						failure
					);
				}
			);
	}
	/**
	 *  Helper method to remove levels associated with a competency from this framework
	 *
	 *  @param {String}            id
	 *                             ID of the competency being removed, to find levels on
	 *  @param {int}               i
	 *                             recursive index parameter
	 *  @param {Callback1<String>} success
	 *                             Callback triggered after all levels in the framework have been checked
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs looking through levels
	 *  @memberOf EcFramework
	 *  @method removeLevelsThatInclude
	 *  @private
	 */
	removeLevelsThatInclude(id, i, success, failure) {
		var shortId = EcRemoteLinkedData.trimVersionFromUrl(id);
		var me = this;
		if (i >= this.level.length && success != null) success("");
		else
			return EcLevel.get(
				this.level[i],
				async(a) => {
					if (a.competency == shortId || a.competency == id) {
						me.level.splice(i, 1);
						await me.removeLevelsThatInclude(
							id,
							i,
							success,
							failure
						);
					} else
						await me.removeLevelsThatInclude(
							id,
							i + 1,
							success,
							failure
						);
				},
				async(s) => {
					await me.removeLevelsThatInclude(
						id,
						i + 1,
						success,
						failure
					);
				}
			);
	}
	/**
	 *  Adds a relation ID to the framework's list of relations
	 *
	 *  @param {String} id
	 *                  ID to add to the framework's relation list
	 *  @memberOf EcFramework
	 *  @method addRelation
	 */
	addRelation(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.relation == null) this.relation = [];
		for (var i = 0; i < this.relation.length; i++)
			if (
				EcRemoteLinkedData.trimVersionFromUrl(this.relation[i]).equals(
					id
				)
			)
				return;
		this.relation.push(id);
	}
	/**
	 *  Removes a relation ID from the framework's list of relations
	 *
	 *  @param {String} id
	 *                  ID to remove from the framework's relation list
	 *  @memberOf EcFramework
	 *  @method removeCompetency
	 */
	removeRelation(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.relation == null) this.relation = [];
		for (var i = 0; i < this.relation.length; i++)
			if (
				EcRemoteLinkedData.trimVersionFromUrl(this.relation[i]).equals(
					id
				)
			)
				this.relation.splice(i, 1);
	}
	/**
	 *  Adds a level ID to the framework's list of levels
	 *
	 *  @param {String} id
	 *                  ID of the level to add to framework's list
	 *  @memberOf EcFramework
	 *  @method addLevel
	 */
	addLevel(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.level == null) this.level = [];
		for (var i = 0; i < this.level.length; i++)
			if (EcRemoteLinkedData.trimVersionFromUrl(this.level[i]).equals(id))
				return;
		this.level.push(id);
	}
	/**
	 *  Removes a level ID from the framework's list of levels
	 *
	 *  @param {String} id
	 *                  ID to remove from framework's level list
	 *  @memberOf EcFramework
	 *  @method removeLevel
	 */
	removeLevel(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.level == null) this.level = [];
		for (var i = 0; i < this.level.length; i++)
			if (EcRemoteLinkedData.trimVersionFromUrl(this.level[i]).equals(id))
				this.level.splice(i, 1);
	}
	/**
	 *  Adds a rollup rule ID to the framework's list of rollup rules
	 *
	 *  @param {String} id
	 *                  ID of the rollup rule to add
	 *  @memberOf EcFramework
	 *  @method addRollupRule
	 */
	addRollupRule(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.rollupRule == null) this.rollupRule = [];
		for (var i = 0; i < this.rollupRule.length; i++)
			if (
				EcRemoteLinkedData.trimVersionFromUrl(
					this.rollupRule[i]
				).equals(id)
			)
				return;
		this.rollupRule.push(id);
	}
	/**
	 *  Removes a rollup rule ID from the framework's list of rollup rules
	 *
	 *  @param {String} id
	 *                  ID to remove from rollup rule list
	 *  @memberOf EcFramework
	 *  @method removeRollupRule
	 */
	removeRollupRule(id) {
		id = EcRemoteLinkedData.trimVersionFromUrl(id);
		if (this.rollupRule == null) this.rollupRule = [];
		for (var i = 0; i < this.rollupRule.length; i++)
			if (
				EcRemoteLinkedData.trimVersionFromUrl(
					this.rollupRule[i]
				).equals(id)
			)
				this.rollupRule.splice(i, 1);
	}
	/**
	 *  Saves this frameworks details on the server specified by it's ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered after successfully saving the framework
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs while saving the framework
	 *  @memberOf EcFramework
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.name == null || this.name == "") {
			var msg = "Framework Name Cannot be Empty";
			if (failure !== undefined && failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (repo == null) return EcRepository.save(this, success, failure, repo, eim);
		else return repo.saveTo(this, success, failure, eim);
	}
	/**
	 *  Deletes this framework from the server specified by it's ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered if successfully deleted framework
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs when deleting the framework
	 *  @memberOf EcFramework
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
	asAsnJson(success, failure, fallbackServerUrl) {
		var id = this.id;
		var server = this.getServerBaseUrl();
		if (server != null && server != undefined && !server.endsWith("/")) {
			server = server + "/";
		}
		return EcRemote.getExpectingString(
			server,
			"asn?id=" + this.getGuid(),
			success,
			(p1) => {
				if (
					fallbackServerUrl != null &&
					fallbackServerUrl != undefined
				) {
					var server = fallbackServerUrl;
					if (!server.endsWith("/")) {
						server = server + "/";
					}
					return EcRemote.getExpectingString(
						server,
						"asn?id=" + id,
						success,
						failure
					);
				} else {
					failure(p1);
				}
			}
		);
	}
};
