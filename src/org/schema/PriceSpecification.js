const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/PriceSpecification
 * A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 *
 * @author schema.org
 * @class PriceSpecification
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class PriceSpecification extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PriceSpecification");
	}

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/price
	 * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
      
	 *
	 * @property price
	 * @type Text
	 */
	price;

	/**
	 * Schema.org/minPrice
	 * The lowest price if the price is a range.
	 *
	 * @property minPrice
	 * @type Number
	 */
	minPrice;

	/**
	 * Schema.org/maxPrice
	 * The highest price if the price is a range.
	 *
	 * @property maxPrice
	 * @type Number
	 */
	maxPrice;

	/**
	 * Schema.org/priceCurrency
	 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property priceCurrency
	 * @type Text
	 */
	priceCurrency;

	/**
	 * Schema.org/eligibleTransactionVolume
	 * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
	 *
	 * @property eligibleTransactionVolume
	 * @type PriceSpecification
	 */
	eligibleTransactionVolume;

	/**
	 * Schema.org/eligibleQuantity
	 * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
	 *
	 * @property eligibleQuantity
	 * @type QuantitativeValue
	 */
	eligibleQuantity;

	/**
	 * Schema.org/valueAddedTaxIncluded
	 * Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.
	 *
	 * @property valueAddedTaxIncluded
	 * @type Boolean
	 */
	valueAddedTaxIncluded;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

}