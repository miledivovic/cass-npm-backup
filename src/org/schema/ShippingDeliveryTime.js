/**
 * Schema.org/ShippingDeliveryTime
 * ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
 *
 * @author schema.org
 * @class ShippingDeliveryTime
 * @module org.schema
 */
public class ShippingDeliveryTime extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ShippingDeliveryTime";
	}

}