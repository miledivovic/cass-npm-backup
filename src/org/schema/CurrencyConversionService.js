/**
 * Schema.org/CurrencyConversionService
 * A service to convert funds from one currency to another currency.
 *
 * @author schema.org
 * @class CurrencyConversionService
 * @module org.schema
 */
module.exports = class CurrencyConversionService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"CurrencyConversionService"
		);
	}
};
