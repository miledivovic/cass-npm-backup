/**
 * Schema.org/InvestmentOrDeposit
 * A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 *
 * @author schema.org
 * @class InvestmentOrDeposit
 * @module org.schema
 */
module.exports = class InvestmentOrDeposit extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "InvestmentOrDeposit");
	}
};
