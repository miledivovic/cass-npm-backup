module.exports = class EcQuiz extends schema.CreativeWork {
	constructor() {
		super();
		this.type = "Quiz";
		this.context = "http://schema.eduworks.com/0.1/";
	}
	static myType = "http://schema.eduworks.com/0.1/Quiz";
	duration = null;
	question = null;
	/**
	 *  Searches a repository for quizzes that match the search query
	 *
	 *  @param {EcRepository}          repo Repository to search using the query
	 *  @param {String}                query Query string to pass to the search web service
	 *  @param {Callback1<Array<Quiz>> success Callback triggered after
	 *                                 completing the search, returns the results
	 *  @param {Callback1<String>}     failure Callback triggered if error searching
	 *  @param {Object}                paramObj Parameter object for search
	 *  @param start
	 *  @param size
	 *  @memberOf Quiz
	 *  @method search
	 *  @static
	 */
	static search(repo, query, success, failure, paramObj) {
		return EcRepository.searchAs(
			repo,
			query,
			() => new EcQuiz(),
			success,
			failure,
			paramObj
		);
	}
};
