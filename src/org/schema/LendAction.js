const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/LendAction
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 *
 * @author schema.org
 * @class LendAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class LendAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LendAction");
	}

	/**
	 * Schema.org/borrower
	 * A sub property of participant. The person that borrows the object being lent.
	 *
	 * @property borrower
	 * @type Person
	 */
	borrower;

}