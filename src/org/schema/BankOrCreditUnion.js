const schema = {};
schema.FinancialService = require("./FinancialService.js");
/**
 * Schema.org/BankOrCreditUnion
 * Bank or credit union.
 *
 * @author schema.org
 * @class BankOrCreditUnion
 * @module org.schema
 * @extends FinancialService
 */
module.exports = class BankOrCreditUnion extends schema.FinancialService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BankOrCreditUnion");
	}

}