const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/InvestmentOrDeposit
 * A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 *
 * @author schema.org
 * @class InvestmentOrDeposit
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class InvestmentOrDeposit extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InvestmentOrDeposit");
	}

	/**
	 * Schema.org/amount
	 * The amount of money.
	 *
	 * @property amount
	 * @type Number
	 */
	amount;

}