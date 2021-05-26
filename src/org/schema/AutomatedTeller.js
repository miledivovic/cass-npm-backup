const schema = {};
schema.FinancialService = require("./FinancialService.js");
/**
 * Schema.org/AutomatedTeller
 * ATM/cash machine.
 *
 * @author schema.org
 * @class AutomatedTeller
 * @module org.schema
 * @extends FinancialService
 */
module.exports = class AutomatedTeller extends schema.FinancialService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutomatedTeller");
	}

}