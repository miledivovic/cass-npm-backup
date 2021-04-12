/**
 * Schema.org/DeliveryTimeSettings
 * A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of a [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 *
 * @author schema.org
 * @class DeliveryTimeSettings
 * @module org.schema
 */
module.exports = class DeliveryTimeSettings extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DeliveryTimeSettings";
	}

}