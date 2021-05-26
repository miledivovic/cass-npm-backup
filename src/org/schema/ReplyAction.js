const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/ReplyAction
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 *
 * @author schema.org
 * @class ReplyAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class ReplyAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReplyAction");
	}

	/**
	 * Schema.org/resultComment
	 * A sub property of result. The Comment created or sent as a result of this action.
	 *
	 * @property resultComment
	 * @type Comment
	 */
	resultComment;

}