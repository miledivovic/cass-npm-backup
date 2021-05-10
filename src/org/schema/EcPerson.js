const EcRepository = require("../cassproject/ebac/repository/EcRepository");

module.exports = class EcPerson extends schema.Person {
	static getByPk(repo, pk, success, failure, eim) {
		return EcPerson.get(
			repo.selectedServer +
			(repo.selectedServer.endsWith("/") ? "" : "/") +
			"data/" +
			pk.fingerprint(),
			success,
			failure, repo, eim
		);
	}
	static getByPkBlocking(repo, pk, eim) {
		return EcPerson.get(
			repo.selectedServer +
			(repo.selectedServer.endsWith("/") ? "" : "/") +
			"data/" +
			pk.fingerprint(), null, null, repo, eim
		);
	}
	equals(obj) {
		return this.isId(obj.id);
	}
	/**
	 *  Retrieves a person from it's server asynchronously
	 *
	 *  @param {String}            id
	 *                             ID of the competency to retrieve from the server
	 *  @param {Callback1<String>} success
	 *                             Callback triggered after retrieving the person,
	 *                             returns the person retrieved
	 *  @param {Callback1<String>} failure
	 *                             Callback triggered if error retrieving person
	 *  @memberOf EcPerson
	 *  @method get
	 *  @static
	 */
	static get(id, success, failure, repo, eim) {
		return EcRepository.getAs(id, new EcPerson(), success, failure, repo, eim);
	}
	/**
	 *  Retrieves a person from it's server synchronously, the call
	 *  blocks until it is successful or an error occurs
	 *
	 *  @param {String} id
	 *                  ID of the person to retrieve
	 *  @return EcPerson
	 *  The person retrieved
	 *  @memberOf EcPerson
	 *  @method getBlocking
	 *  @static
	 */
	static getBlocking(id, repo, eim) {
		return EcRepository.getAs(id, new EcPerson(), null, null, repo, eim);
	}
	/**
	 *  Searches a repository for persons that match the search query
	 *
	 *  @param {EcRepository}          repo Repository to search using the query
	 *  @param {String}                query Query string to pass to the search web service
	 *  @param {Callback1<Array<Quiz>> success Callback triggered after
	 *                                 completing the search, returns the results
	 *  @param {Callback1<String>}     failure Callback triggered if error searching
	 *  @param {Object}                paramObj Parameter object for search
	 *  @memberOf EcPerson
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj, eim) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new EcPerson(),
			success,
			failure,
			paramObj, eim
		);
	}
	/**
	 *  Attempts to find and return the person's fingerprint from the id.
	 *
	 *  @return {String}
	 *  @method getFingerprintFromId
	 */
	getFingerprintFromId() {
		return this.getGuid();
	}
	/**
	 *  Attempts to find and return the person's fingerprint from the id.
	 *
	 *  @return {String}
	 *  @method getFingerprintFromId
	 */
	getFingerprint() {
		return this.getGuid();
	}
};
