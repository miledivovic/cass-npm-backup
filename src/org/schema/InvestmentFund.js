/**
 * Schema.org/InvestmentFund
 * A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets.
 *
 * @author schema.org
 * @class InvestmentFund
 * @module org.schema
 */
module.exports = class InvestmentFund extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InvestmentFund");
	}

}