const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/GiveAction
 * The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[TakeAction]]: Reciprocal of GiveAction.\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 *
 * @author schema.org
 * @class GiveAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class GiveAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GiveAction");
	}

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

}