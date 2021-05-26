const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/OfferShippingDetails
 * OfferShippingDetails represents information about shipping destinations.

Multiple of these entities can be used to represent different shipping rates for different destinations:

One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.

Multiple of these entities can be used to represent different shipping costs and delivery times.

Two entities that are identical but differ in rate and time:

e.g. Cheaper and slower: $5 in 5-7days
or Fast and expensive: $15 in 1-2 days.
 *
 * @author schema.org
 * @class OfferShippingDetails
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class OfferShippingDetails extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferShippingDetails");
	}

	/**
	 * Schema.org/shippingRate
	 * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
	 *
	 * @property shippingRate
	 * @type MonetaryAmount
	 */
	shippingRate;

	/**
	 * Schema.org/shippingDestination
	 * indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges.
	 *
	 * @property shippingDestination
	 * @type DefinedRegion
	 */
	shippingDestination;

	/**
	 * Schema.org/doesNotShip
	 * Indicates when shipping to a particular [[shippingDestination]] is not available.
	 *
	 * @property doesNotShip
	 * @type Boolean
	 */
	doesNotShip;

	/**
	 * Schema.org/shippingLabel
	 * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
	 *
	 * @property shippingLabel
	 * @type Text
	 */
	shippingLabel;

	/**
	 * Schema.org/shippingSettingsLink
	 * Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details.
	 *
	 * @property shippingSettingsLink
	 * @type URL
	 */
	shippingSettingsLink;

	/**
	 * Schema.org/transitTimeLabel
	 * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
	 *
	 * @property transitTimeLabel
	 * @type Text
	 */
	transitTimeLabel;

	/**
	 * Schema.org/deliveryTime
	 * The total delay between the receipt of the order and the goods reaching the final customer.
	 *
	 * @property deliveryTime
	 * @type ShippingDeliveryTime
	 */
	deliveryTime;

}