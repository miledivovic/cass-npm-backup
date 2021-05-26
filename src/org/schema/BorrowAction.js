const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/BorrowAction
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 *
 * @author schema.org
 * @class BorrowAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class BorrowAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BorrowAction");
	}

	/**
	 * Schema.org/lender
	 * A sub property of participant. The person that lends the object being borrowed.
	 *
	 * @property lender
	 * @type Organization
	 */
	lender;

}