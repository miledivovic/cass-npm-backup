const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/BankAccount
 * A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
 *
 * @author schema.org
 * @class BankAccount
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class BankAccount extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BankAccount");
	}

	/**
	 * Schema.org/accountMinimumInflow
	 * A minimum amount that has to be paid in every month.
	 *
	 * @property accountMinimumInflow
	 * @type MonetaryAmount
	 */
	accountMinimumInflow;

	/**
	 * Schema.org/accountOverdraftLimit
	 * An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money.
	 *
	 * @property accountOverdraftLimit
	 * @type MonetaryAmount
	 */
	accountOverdraftLimit;

	/**
	 * Schema.org/bankAccountType
	 * The type of a bank account.
	 *
	 * @property bankAccountType
	 * @type URL
	 */
	bankAccountType;

}