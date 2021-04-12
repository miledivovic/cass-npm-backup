/**
 * Schema.org/OrderStatus
 * Enumerated status values for Order.
 *
 * @author schema.org
 * @class OrderStatus
 * @module org.schema
 */
public class OrderStatus extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "OrderStatus";
	}

}