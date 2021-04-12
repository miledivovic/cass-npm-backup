/**
 * Schema.org/DeliveryEvent
 * An event involving the delivery of an item.
 *
 * @author schema.org
 * @class DeliveryEvent
 * @module org.schema
 */
module.exports = class DeliveryEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DeliveryEvent";
	}

}