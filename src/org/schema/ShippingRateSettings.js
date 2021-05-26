const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/ShippingRateSettings
 * A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
 *
 * @author schema.org
 * @class ShippingRateSettings
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class ShippingRateSettings extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShippingRateSettings");
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
	 * Schema.org/freeShippingThreshold
	 * A monetary value above which (or equal to) the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]].
	 *
	 * @property freeShippingThreshold
	 * @type DeliveryChargeSpecification
	 */
	freeShippingThreshold;

}