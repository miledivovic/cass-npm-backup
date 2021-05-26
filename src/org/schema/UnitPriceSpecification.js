const schema = {};
schema.PriceSpecification = require("./PriceSpecification.js");
/**
 * Schema.org/UnitPriceSpecification
 * The price asked for a given offer by the respective organization or person.
 *
 * @author schema.org
 * @class UnitPriceSpecification
 * @module org.schema
 * @extends PriceSpecification
 */
module.exports = class UnitPriceSpecification extends schema.PriceSpecification {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UnitPriceSpecification");
	}

	/**
	 * Schema.org/referenceQuantity
	 * The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.
	 *
	 * @property referenceQuantity
	 * @type QuantitativeValue
	 */
	referenceQuantity;

	/**
	 * Schema.org/billingStart
	 * Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property.
	 *
	 * @property billingStart
	 * @type Number
	 */
	billingStart;

	/**
	 * Schema.org/unitText
	 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
<a href='unitCode'>unitCode</a>.
	 *
	 * @property unitText
	 * @type Text
	 */
	unitText;

	/**
	 * Schema.org/unitCode
	 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
	 *
	 * @property unitCode
	 * @type Text
	 */
	unitCode;

	/**
	 * Schema.org/priceComponentType
	 * Identifies a price component (for example, a line item on an invoice), part of the total price for an offer.
	 *
	 * @property priceComponentType
	 * @type PriceComponentTypeEnumeration
	 */
	priceComponentType;

	/**
	 * Schema.org/billingIncrement
	 * This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.
	 *
	 * @property billingIncrement
	 * @type Number
	 */
	billingIncrement;

	/**
	 * Schema.org/billingDuration
	 * Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property).
	 *
	 * @property billingDuration
	 * @type Duration
	 */
	billingDuration;

	/**
	 * Schema.org/priceType
	 * Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
	 *
	 * @property priceType
	 * @type Text
	 */
	priceType;

}