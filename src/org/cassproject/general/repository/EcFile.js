const EcRepository = require("../../ebac/repository/EcRepository");
require("../AuditLogger.js")

/**
 *  Implementation of a file with methods for communicating with repository services
 *
 *  @author devlin.junker@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcFile
 *  @extends GeneralFile
 *  @constructor
 */
module.exports = class EcFile extends GeneralFile {
	/**
	 *  Factory method for creating a file with certain values
	 *
	 *  @param {String} name
	 *                  Name of the file to be created
	 *  @param {String} base64Data
	 *                  Base 64 encoded file data
	 *  @param {String} mimeType
	 *                  MIME Type of the file
	 *  @return {EcFile}
	 *  The file created
	 *  @memberOf EcFile
	 *  @method create
	 *  @static
	 */
	static create(name, base64Data, mimeType) {
		let f = new EcFile();
		f.data = base64Data;
		f.name = name;
		f.mimeType = mimeType;
		return f;
	}
	/**
	 *  Retrieves a file from the server specified by it's ID
	 *
	 *  @param {String}            id
	 *                             ID of the file data to be retrieved
	 *  @param {Callback1<EcFile>} success
	 *                             Callback triggered if successfully retrieved from the server,
	 *                             returns the retrieved file
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs while retrieving file from server
	 *  @memberOf EcFile
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new EcFile(), success, failure, repo, eim);
	}
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new EcFile(), null, null, repo, eim);
	}
	/**
	 *  Searches the repository given for files that match the query passed in
	 *
	 *  @param {EcRepository}       repo
	 *                              Repository to search for files
	 *  @param {String}             query
	 *                              Query to user for search
	 *  @param {Callback1<EcFile[]> success
	 *                              Callback triggered after search completes,
	 *                              returns results
	 *  @param {Callback1<String>}  failure
	 *                              Callback triggered if error occurs while searching
	 *  @param {Object}             paramObj
	 *                              Parameters to pass to search
	 *  @memberOf EcFile
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			query,
			function() {
				return new EcFile();
			},
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Saves this file in the repository using the repository web services
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered if successfully saved
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs while saving
	 *  @memberOf EcFile
	 *  @method save
	 */
	save(success, failure, repo, eim) {
		if (this.name == null || this.name == "") {
			let msg = "File Name can not be empty";
			if (failure != null) failure(msg);
			else global.auditLogger.report(global.auditLogger.LogCategory.SYSTEM, global.auditLogger.Severity.ERROR, "EcFileSave", msg);
			return;
		}
		return EcRepository.save(this, success, failure, repo, eim);
	}
	/**
	 *  Deletes the file from the repository using repository web services
	 *
	 *  @param {Callback1<String>} success
	 *                             Callback triggered if successfully deleted
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error occurs while deleting
	 *  @memberOf EcFile
	 *  @method _delete
	 */
	_delete = function(repo, success, failure, eim) {
		return repo.DELETE(this, success, failure, repo, eim);
	};
};
