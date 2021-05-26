const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/SolveMathAction
 * The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 *
 * @author schema.org
 * @class SolveMathAction
 * @module org.schema
 * @extends Action
 */
module.exports = class SolveMathAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SolveMathAction");
	}

	/**
	 * Schema.org/eduQuestionType
	 * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
	 *
	 * @property eduQuestionType
	 * @type Text
	 */
	eduQuestionType;

}