/**
 * Schema.org/MonetaryAmountDistribution
 * A statistical distribution of monetary amounts.
 *
 * @author schema.org
 * @class MonetaryAmountDistribution
 * @module org.schema
 */
module.exports = class MonetaryAmountDistribution extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MonetaryAmountDistribution";
	}

}