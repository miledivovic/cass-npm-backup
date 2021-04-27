module.exports = class CfdAlignment extends schema.AlignmentObject {
	static myType = "http://schema.org/AlignmentObject";
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
	 *  @memberOf EcAlignment
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure) {
		return EcRepository.getAs(id, new CfdAlignment(), success, failure);
	}
	/**
	 *  Retrieves an alignment from it's server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the alignment to retrieve
	 *  @return EcAlignment
	 *  The alignment retrieved
	 *  @memberOf EcAlignment
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id) {
		return EcRepository.getAs(id, new CfdAlignment());
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
	 *  @memberOf EcAlignment
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new CfdAlignment(),
			success,
			failure,
			paramObj
		);
	}
	/**
	 *  Gets the AlignmentObject educationalFramework field of this alignment
	 *
	 *  @param {String} frameworkId
	 *                  ID of framework this Alignment is related to
	 */
	getEducationalFramework() {
		return this.educationalFramework;
	}
	/**
	 *  Sets the AlignmentObject educationalFramework field with the id of the framework this competency is part of
	 *
	 *  @param {String} frameworkId
	 *                  ID of framework this Alignment is related to
	 */
	setEducationalFramework(frameworkId) {
		this.educationalFramework = frameworkId;
	}
	/**
	 *  Gets the AlignmentObject targetUrl field with the id of the competency it is aligned with
	 *
	 *  @return {String}
	 *  ID of the competency aligned with
	 */
	getTargetUrl() {
		return this.targetUrl;
	}
	/**
	 *  Sets the AlignmentObject targetUrl field with the id of the competency it is aligned with
	 *
	 *  @param {String} targetId
	 *                  ID of competency this Alignment is related to
	 */
	setTargetUrl(targetId) {
		this.targetUrl = targetId;
	}
	/**
	 *  Sets the AlignmentObject alignmentType field
	 *
	 *  @param {String} type
	 *                  Alignment type for alignment. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.
	 */
	setAlignmentType(type) {
		this.alignmentType = type;
	}
	/**
	 *  Saves this alignment details on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving alignment
	 *  @memberOf CfdAlignment
	 *  @method save
	 */
	save(success, failure) {
		if (this.targetUrl == null || this.targetUrl == "") {
			var msg = "Target Competency cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.alignmentType == null || this.alignmentType == "") {
			var msg = "Relation Type cannot be missing";
			if (failure != null) return failure(msg);
			else throw new Error(msg);
		}
		return EcRepository.save(this, success, failure);
	}
	/**
	 *  Deletes the alignment from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting alignment
	 *  @memberOf CfdAlignment
	 *  @method _delete
	 */
	_delete = function(success, failure) {
		return EcRepository.DELETE(this, success, failure);
	};
};
