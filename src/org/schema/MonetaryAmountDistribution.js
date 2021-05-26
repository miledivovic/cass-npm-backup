const schema = {};
schema.QuantitativeValueDistribution = require("./QuantitativeValueDistribution.js");
/**
 * Schema.org/MonetaryAmountDistribution
 * A statistical distribution of monetary amounts.
 *
 * @author schema.org
 * @class MonetaryAmountDistribution
 * @module org.schema
 * @extends QuantitativeValueDistribution
 */
module.exports = class MonetaryAmountDistribution extends schema.QuantitativeValueDistribution {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MonetaryAmountDistribution");
	}

	/**
	 * Schema.org/currency
	 * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property currency
	 * @type Text
	 */
	currency;

}