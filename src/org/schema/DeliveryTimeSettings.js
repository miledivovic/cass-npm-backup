const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/DeliveryTimeSettings
 * A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of a [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 *
 * @author schema.org
 * @class DeliveryTimeSettings
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class DeliveryTimeSettings extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DeliveryTimeSettings");
	}

	/**
	 * Schema.org/isUnlabelledFallback
	 * This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
	 *
	 * @property isUnlabelledFallback
	 * @type Boolean
	 */
	isUnlabelledFallback;

	/**
	 * Schema.org/shippingDestination
	 * indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges.
	 *
	 * @property shippingDestination
	 * @type DefinedRegion
	 */
	shippingDestination;

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