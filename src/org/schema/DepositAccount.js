global.schema.BankAccount = require("./BankAccount.js");
/**
 * Schema.org/DepositAccount
 * A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.
 *
 * @author schema.org
 * @class DepositAccount
 * @module org.schema
 * @extends BankAccount
 */
module.exports = class DepositAccount extends schema.BankAccount {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DepositAccount");
	}

}