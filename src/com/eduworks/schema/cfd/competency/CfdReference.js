/**
 *  Competency is Under construction.
 *  <p>
 *  Working model of competency with CFD Reference extension.
 *
 *  @author debbie.brown@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @class CfdReference
 *  @module com.eduworks
 *  @extends org.schema.CreativeWork
 */
module.exports = class CfdReference extends schema.CreativeWork {
	constructor() {
		super();
		this.educationalUse = CfdReference.edUse;
	}
	static myType = "http://schema.org/CreativeWork";
	static edUse = "Reference";
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
	 *  @memberOf CfdReference
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new CfdReference(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves an alignment from it's server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the alignment to retrieve
	 *  @return EcAlignment
	 *  The alignment retrieved
	 *  @memberOf CfdReference
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new CfdReference(), null, null, repo, eim);
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
	 *  @memberOf CfdReference
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			"(" + query + ') AND educationalUse:"' + CfdReference.edUse,
			() => new CfdReference(),
			success,
			failure,
			paramObj
		);
	}
	/**
	 *  Searches the repository for references with the framework and optional parameters provided
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
	static searchWithFramework(repo, framework, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			"(" +
				query +
				') AND educationalUse:"' +
				CfdReference.edUse +
				'" AND educationalAlignment.educationalFramework:"' +
				framework +
				'"',
			() => new CfdReference(),
			success,
			failure,
			paramObj
		);
	}
	/**
	 *  Returns the name of the reference
	 *
	 *  @return {String}
	 *  name of reference
	 */
	getName() {
		return this.name;
	}
	/**
	 *  Sets the Name of the reference
	 *
	 *  @param {String} name
	 *                  name of the reference
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *  Returns the URL of the reference
	 *
	 *  @return {String}
	 *  URL of reference
	 */
	getUrl() {
		return this.url;
	}
	/**
	 *  Sets the URL of the reference
	 *
	 *  @param {String} URL
	 *                  URL the reference is pointing at
	 */
	setUrl(url) {
		this.url = url;
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
	 *  Returns the Educational Use of the reference (Should be Reference)
	 *
	 *  @return {String}
	 *  educational use
	 */
	getEducationalUse() {
		return this.educationalUse;
	}
	/**
	 *  Saves this alignment details on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving alignment
	 *  @memberOf CfdReference
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.name == null || this.name == "") {
			var msg = "Name cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.url == null || this.url == "") {
			var msg = "Url cannot be missing";
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
	 *  @memberOf CfdReference
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
};
