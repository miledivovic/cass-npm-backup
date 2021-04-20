/**
 * Schema.org/OrderItem
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 *
 * @author schema.org
 * @class OrderItem
 * @module org.schema
 */
module.exports = class OrderItem extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrderItem");
	}

}