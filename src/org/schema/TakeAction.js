const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/TakeAction
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 *
 * @author schema.org
 * @class TakeAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class TakeAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TakeAction");
	}

}