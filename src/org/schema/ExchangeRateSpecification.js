/**
 * Schema.org/ExchangeRateSpecification
 * A structured value representing exchange rate.
 *
 * @author schema.org
 * @class ExchangeRateSpecification
 * @module org.schema
 */
module.exports = class ExchangeRateSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExchangeRateSpecification");
	}

}