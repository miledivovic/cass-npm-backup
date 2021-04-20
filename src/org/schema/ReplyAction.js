/**
 * Schema.org/ReplyAction
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 *
 * @author schema.org
 * @class ReplyAction
 * @module org.schema
 */
module.exports = class ReplyAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReplyAction");
	}

}