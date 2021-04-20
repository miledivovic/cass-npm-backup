/**
 * Schema.org/AskAction
 * The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 *
 * @author schema.org
 * @class AskAction
 * @module org.schema
 */
module.exports = class AskAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AskAction");
	}

}