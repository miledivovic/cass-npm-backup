/**
 * Schema.org/ExchangeRateSpecification
 * A structured value representing exchange rate.
 *
 * @author schema.org
 * @class ExchangeRateSpecification
 * @module org.schema
 */
public class ExchangeRateSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ExchangeRateSpecification";
	}

}