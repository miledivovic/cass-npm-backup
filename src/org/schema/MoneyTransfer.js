const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/MoneyTransfer
 * The act of transferring money from one place to another place. This may occur electronically or physically.
 *
 * @author schema.org
 * @class MoneyTransfer
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class MoneyTransfer extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MoneyTransfer");
	}

	/**
	 * Schema.org/beneficiaryBank
	 * A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary.
	 *
	 * @property beneficiaryBank
	 * @type BankOrCreditUnion
	 */
	beneficiaryBank;

	/**
	 * Schema.org/amount
	 * The amount of money.
	 *
	 * @property amount
	 * @type Number
	 */
	amount;

}