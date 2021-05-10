const EcRepository = require("../../cassproject/ebac/repository/EcRepository.js");
const Relation = require("../../cassproject/schema/cass/competency/Relation.js");
/**
 *  Implementation of an alignment object with methods for interacting with CASS
 *  services on a server.
 *
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  <p>
 *  TODO: Test case where an absent relation is in the framework.
 *  @module org.cassproject
 *  @class EcAlignment
 *  @constructor
 *  @extends Relation
 */
module.exports = class EcAlignment extends Relation {
	equals(obj) {
		if (obj.id == null)
			return (
				obj.source == this.source &&
				obj.target == this.target &&
				obj.relationType == this.relationType
			);
		return this.isId(obj.id);
	}
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
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new EcAlignment(), success, failure, repo, eim);
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
	 *  @deprecated await on get() instead.
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new EcAlignment(), null, null, repo, eim);
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
	 *  @memberOf EcAlignment
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new EcAlignment(),
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Searches the repository for alignments with a specific ID in the source field
	 *
	 *  @param {EcRepository}                  repo
	 *                                         Repository to search for alignments with the source specified
	 *  @param {String}                        sourceId
	 *                                         ID in the source field of the alignments to find
	 *  @param {Callback1<Array<EcAlignment>>} success
	 *                                         Callback triggered on successful search return
	 *  @param {Callback1<String>}             [failure]
	 *                                         Callback triggered if error searching
	 *  @param {Object}                        [paramObj]
	 *                                         Parameters to include in the search
	 *  @memberOf EcAlignment
	 *  @method searchBySource
	 *  @static
	 */
	static searchBySource(repo, sourceId, success, failure, paramObj, eim) {
		var query = "";
		var noVersion = EcRemoteLinkedData.trimVersionFromUrl(sourceId);
		if (noVersion == sourceId) {
			query += 'source:"' + sourceId + '"';
		} else {
			query += 'source:"' + sourceId + '" OR source:"' + noVersion + '"';
		}
		return EcAlignment.search(repo, query, success, failure, paramObj, eim);
	}
	/**
	 *  Searches the repository for alignments with one of an array of IDs in the source field
	 *
	 *  @param {EcRepository}                  repo
	 *                                         Repository to search for alignments with the source specified
	 *  @param {String}                        sourceId
	 *                                         ID in the source field of the alignments to find
	 *  @param {Callback1<Array<EcAlignment>>} success
	 *                                         Callback triggered on successful search return
	 *  @param {Callback1<String>}             [failure]
	 *                                         Callback triggered if error searching
	 *  @param {Object}                        [paramObj]
	 *                                         Parameters to include in the search
	 *  @memberOf EcAlignment
	 *  @method searchBySource
	 *  @static
	 */
	static searchBySources(repo, sourceIds, success, failure, paramObj, eim) {
		var query = "";
		query = "(source:";
		var noVersions = [];
		for (var i = 0; i < sourceIds.length; i++) {
			var sourceId = sourceIds[i];
			if (i != 0) query += " OR ";
			var noVersion = EcRemoteLinkedData.trimVersionFromUrl(sourceId);
			if (noVersion == sourceId) {
				query += '"' + sourceId + '"';
			} else {
				query += '"' + sourceId + '" OR source:"' + noVersion + '"';
			}
			noVersions.push(noVersion);
		}
		query += ")";
		return EcAlignment.search(repo, query, success, failure, paramObj, eim);
	}
	/**
	 *  Searches the repository for alignments with a specific ID in the target field
	 *
	 *  @param {EcRepository}                  repo
	 *                                         Repository to search for alignments with the source specified
	 *  @param {String}                        competencyId
	 *                                         ID in the target field of the alignments to find
	 *  @param {Callback1<Array<EcAlignment>>} success
	 *                                         Callback triggered on successful search return
	 *  @param {Callback1<String>}             [failure]
	 *                                         Callback triggered if error searching
	 *  @param {Object}                        [paramObj]
	 *                                         Parameters to include in the search
	 *  @memberOf EcAlignment
	 *  @method searchByCompetency
	 *  @static
	 */
	static searchByCompetency(repo, competencyId, success, failure, paramObj, eim) {
		var query = "";
		var noVersion = EcRemoteLinkedData.trimVersionFromUrl(competencyId);
		if (noVersion == competencyId) {
			query +=
				' AND (source:"' +
				competencyId +
				'" OR target:"' +
				competencyId +
				'")';
		} else {
			query +=
				' AND (source:"' +
				competencyId +
				'" OR source:"' +
				noVersion +
				'" OR target:"' +
				competencyId +
				'" OR target:"' +
				noVersion +
				'")';
		}
		return EcAlignment.search(repo, query, success, failure, paramObj, eim);
	}
	/**
	 *  Setter for alignment name
	 *
	 *  @param {String} name
	 *                  name to give this alignment
	 *  @memberOf EcAlignment
	 *  @method setName
	 */
	setName(name) {
		this.name = name;
	}
	/**
	 *  Setter for alignment description
	 *
	 *  @param {String} description
	 *                  description to give this alignment
	 *  @memberOf EcAlignment
	 *  @method setDescription
	 */
	setDescription(description) {
		this.description = description;
	}
	/**
	 *  Saves this alignment details on the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully saving the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while saving alignment
	 *  @memberOf EcAlignment
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.source == null || this.source == "") {
			var msg = "Source Competency cannot be missing";
			if (failure !== undefined && failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.target == null || this.target == "") {
			var msg = "Target Competency cannot be missing";
			if (failure !== undefined && failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (this.relationType == null || this.relationType == "") {
			var msg = "Relation Type cannot be missing";
			if (failure !== undefined && failure != null) return failure(msg);
			else throw new Error(msg);
		}
		if (repo == null) return EcRepository.save(this, success, failure, repo, eim);
		else return repo.saveTo(this, success, failure, eim);
	}
	/**
	 *  Deletes the alignment from the server corresponding to its ID
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered on successfully deleting the alignment
	 *  @param {Callback1<String>} [failure]
	 *                             Callback triggered if error while deleting alignment
	 *  @memberOf EcAlignment
	 *  @method _delete
	 */
	_delete = function (success, failure, repo, eim) {
		return EcRepository.DELETE(this, success, failure, repo, eim);
	};
};
