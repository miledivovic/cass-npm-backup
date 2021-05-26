const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/OrderItem
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 *
 * @author schema.org
 * @class OrderItem
 * @module org.schema
 * @extends Intangible
 */
module.exports = class OrderItem extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrderItem");
	}

	/**
	 * Schema.org/orderItemStatus
	 * The current status of the order item.
	 *
	 * @property orderItemStatus
	 * @type OrderStatus
	 */
	orderItemStatus;

	/**
	 * Schema.org/orderDelivery
	 * The delivery of the parcel related to this order or order item.
	 *
	 * @property orderDelivery
	 * @type ParcelDelivery
	 */
	orderDelivery;

	/**
	 * Schema.org/orderItemNumber
	 * The identifier of the order item.
	 *
	 * @property orderItemNumber
	 * @type Text
	 */
	orderItemNumber;

	/**
	 * Schema.org/orderQuantity
	 * The number of the item ordered. If the property is not set, assume the quantity is one.
	 *
	 * @property orderQuantity
	 * @type Number
	 */
	orderQuantity;

	/**
	 * Schema.org/orderedItem
	 * The item ordered.
	 *
	 * @property orderedItem
	 * @type OrderItem
	 */
	orderedItem;

}