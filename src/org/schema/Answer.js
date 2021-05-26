const schema = {};
schema.Comment = require("./Comment.js");
/**
 * Schema.org/Answer
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 *
 * @author schema.org
 * @class Answer
 * @module org.schema
 * @extends Comment
 */
module.exports = class Answer extends schema.Comment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Answer");
	}

	/**
	 * Schema.org/answerExplanation
	 * A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. 
	 *
	 * @property answerExplanation
	 * @type Comment
	 */
	answerExplanation;

}