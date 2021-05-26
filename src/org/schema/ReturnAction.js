const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/ReturnAction
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 *
 * @author schema.org
 * @class ReturnAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class ReturnAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReturnAction");
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