const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/ExchangeRateSpecification
 * A structured value representing exchange rate.
 *
 * @author schema.org
 * @class ExchangeRateSpecification
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class ExchangeRateSpecification extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExchangeRateSpecification");
	}

	/**
	 * Schema.org/currentExchangeRate
	 * The current price of a currency.
	 *
	 * @property currentExchangeRate
	 * @type UnitPriceSpecification
	 */
	currentExchangeRate;

	/**
	 * Schema.org/exchangeRateSpread
	 * The difference between the price at which a broker or other intermediary buys and sells foreign currency.
	 *
	 * @property exchangeRateSpread
	 * @type MonetaryAmount
	 */
	exchangeRateSpread;

	/**
	 * Schema.org/currency
	 * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property currency
	 * @type Text
	 */
	currency;

}