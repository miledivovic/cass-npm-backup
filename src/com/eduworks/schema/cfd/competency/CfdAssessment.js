const EcRepository = require("../../../../../org/cassproject/ebac/repository/EcRepository");

/**
 *  Competency is Under construction.
 *  <p>
 *  Working model of competency with CFD Assessment extension.
 *
 *  @author debbie.brown@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class CfdAssessment
 *  @module com.eduworks
 *  @extends org.schema.CreativeWork
 */
module.exports = class CfdAssessment extends schema.CreativeWork {
	constructor() {
		super();
		CreativeWork.call(this);
		this.educationalUse = CfdAssessment.edUse;
	}
	static myType = "http://schema.org/CreativeWork";
	static edUse = "Assessment";
	/**
	 *  Retrieves the alignment specified with the ID from the server
	 *
	 *  @param {String}                 id
	 *                                  ID of the alignment to retrieve
	 *  @param {Callback1<EcAlignment>} success
	 *                                  Callback triggered on successfully retrieving the alignment,
	 *                                  returns the alignment
	 *  @param {Callback1<String>}      [failure]
	 *                                  Callback triggered if error while retrieving alignment
	 *  @memberOf CfdAssessment
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure) {
		return EcRepository.getAs(id, new CfdAssessment(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves an alignment from it's server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the alignment to retrieve
	 *  @return EcAlignment
	 *  The alignment retrieved
	 *  @memberOf CfdAssessment
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new CfdAssessment(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository using the query and optional parameters provided
	 *
	 *  @param {EcRepository}                  repo
	 *                                         Repository to search using the query provided
	 *  @param {String}                        query
	 *                                         The query to send to the search
	 *  @param {Callback1<Array<EcAlignment>>} success
	 *                                         Callback triggered on successful search return
	 *  @param {Callback1<String>}             [failure]
	 *                                         Callback triggered if error searching
	 *  @param {Object}                        [paramObj]
	 *                                         Parameters to include in the search
	 *  @param start
	 *  @param size
	 *  @memberOf CfdAssessment
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			"(" + query + ') AND educationalUse:"' + CfdAssessment.edUse + '"',
			() => new CfdAssessment(),
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Searches the repository for assessments with the framework and optional parameters provided
	 *
	 *  @param {EcRepository}                  repo
	 *                                         Repository to search using the query provided
	 *  @param {String}                        Framework
	 *                                         The Framework to search for References with EducationalAlignments too
	 *  @param {Callback1<Array<EcAlignment>>} success
	 *                                         Callback triggered on successful search return
	 *  @param {Callback1<String>}             [failure]
	 *                                         Callback triggered if error searching
	 *  @param {Object}                        [paramObj]
	 *                                         Parameters to include in the search
	 *  @param start
	 *  @param size
	 *  @memberOf CfdReference
	 *  @method search
	 *  @static
	 */
	static searchWithFramework(repo, framework, success, failure, paramObj, eim) {
		var query = new CfdAssessment().getSearchStringByType();
		query =
			"(" +
			query +
			') AND educationalUse:"' +
			CfdAssessment.edUse +
			'" AND educationalAlignment.educationalFramework:"' +
			framework +
			'"';
		return repo.searchWithParams(
			query,
			paramObj,
			null,
			async (p1) => {
				if (success != null) {
					var ret = [];
					for (var i = 0; i < p1.length; i++) {
						var assessment = new CfdAssessment();
						if (p1[i].isAny(assessment.getTypes())) {
							assessment.copyFrom(p1[i]);
						} else if (p1[i].isA(EcEncryptedValue.myType)) {
							var val = new EcEncryptedValue();
							val.copyFrom(p1[i]);
							if (val.isAnEncrypted(CfdAssessment.myType)) {
								var obj = await val.decryptIntoObject(null, null, eim);
								assessment.copyFrom(obj);
							}
						}
						ret[i] = assessment;
					}
					success(ret);
				}
			},
			failure, eim
		);
	}
	/**
	 *  Returns the name of the assessment
	 *
	 *  @return {String}
	 *  name of assessment
	 */
	getName() {
		return this.name;
	}
	/**
	 *  Sets the Name of the assessment
	 *
	 *  @param {String} name
	 *                  name of the assessment
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *  Gets the educational alignment of the reference
	 *
	 *  @return {CfdAlignment}
	 *  Educational Alignment for reference
	 */
	getEducationalAlignment() {
		return this.educationalAlignment;
	}
	/**
	 *  Sets the educational alignment of the reference
	 *
	 *  @param {CfdAlignment} alignment
	 *                        Educational alignment for reference
	 */
	setEducationalAlignment(alignment) {
		this.educationalAlignment = alignment;
	}
	/**
	 *  Returns the Educational Use of the reference (Should be Assessment)
	 *
	 *  @return {CfdAlignment}
	 *  Educational Alignment for reference
	 */
	getEducationalUse() {
		return CfdAssessment.edUse;
	}
	/**
	 *  Saves this alignment details on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving alignment
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.name == null || this.name == "") {
			var msg = "Name cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.educationalAlignment == null) {
			var msg = "Educational Alignment cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		return EcRepository.save(this, success, failure, repo, eim);
	}
	/**
	 *  Deletes the alignment from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting alignment
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
};
