/**
 * Schema.org/ShippingDeliveryTime
 * ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
 *
 * @author schema.org
 * @class ShippingDeliveryTime
 * @module org.schema
 */
module.exports = class ShippingDeliveryTime extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShippingDeliveryTime");
	}

}