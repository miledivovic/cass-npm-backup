const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/ShippingDeliveryTime
 * ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
 *
 * @author schema.org
 * @class ShippingDeliveryTime
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class ShippingDeliveryTime extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShippingDeliveryTime");
	}

	/**
	 * Schema.org/handlingTime
	 * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY).  This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates.
	 *
	 * @property handlingTime
	 * @type QuantitativeValue
	 */
	handlingTime;

	/**
	 * Schema.org/businessDays
	 * Days of the week when the merchant typically operates, indicated via opening hours markup.
	 *
	 * @property businessDays
	 * @type OpeningHoursSpecification
	 */
	businessDays;

	/**
	 * Schema.org/cutoffTime
	 * Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).
	 *
	 * @property cutoffTime
	 * @type Time
	 */
	cutoffTime;

	/**
	 * Schema.org/transitTime
	 * The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY).
	 *
	 * @property transitTime
	 * @type QuantitativeValue
	 */
	transitTime;

}