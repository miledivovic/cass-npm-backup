const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/PaymentService
 * A Service to transfer funds from a person or organization to a beneficiary person or organization.
 *
 * @author schema.org
 * @class PaymentService
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class PaymentService extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PaymentService");
	}

}