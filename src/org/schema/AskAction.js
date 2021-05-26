const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/AskAction
 * The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 *
 * @author schema.org
 * @class AskAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class AskAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AskAction");
	}

	/**
	 * Schema.org/question
	 * A sub property of object. A question.
	 *
	 * @property question
	 * @type Question
	 */
	question;

}