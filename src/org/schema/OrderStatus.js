/**
 * Schema.org/OrderStatus
 * Enumerated status values for Order.
 *
 * @author schema.org
 * @class OrderStatus
 * @module org.schema
 */
module.exports = class OrderStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "OrderStatus");
	}
};
