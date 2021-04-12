/**
 * Schema.org/QuantitativeValueDistribution
 * A statistical distribution of values.
 *
 * @author schema.org
 * @class QuantitativeValueDistribution
 * @module org.schema
 */
module.exports = class QuantitativeValueDistribution extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "QuantitativeValueDistribution";
	}

}