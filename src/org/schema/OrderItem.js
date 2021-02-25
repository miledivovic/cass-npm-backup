/**
 *  Schema.org/OrderItem
 *  An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 * 
 *  @author schema.org
 *  @class OrderItem
 *  @module org.schema
 *  @extends Intangible
 */
var OrderItem = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "OrderItem";
};
OrderItem = stjs.extend(OrderItem, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/orderItemStatus
     *  The current status of the order item.
     * 
     *  @property orderItemStatus
     *  @type OrderStatus
     */
    prototype.orderItemStatus = null;
    /**
     *  Schema.org/orderQuantity
     *  The number of the item ordered. If the property is not set, assume the quantity is one.
     * 
     *  @property orderQuantity
     *  @type Number
     */
    prototype.orderQuantity = null;
    /**
     *  Schema.org/orderedItem
     *  The item ordered.
     * 
     *  @property orderedItem
     *  @type Product
     */
    prototype.orderedItem = null;
    /**
     *  Schema.org/orderDelivery
     *  The delivery of the parcel related to this order or order item.
     * 
     *  @property orderDelivery
     *  @type ParcelDelivery
     */
    prototype.orderDelivery = null;
    /**
     *  Schema.org/orderItemNumber
     *  The identifier of the order item.
     * 
     *  @property orderItemNumber
     *  @type Text
     */
    prototype.orderItemNumber = null;
}, {orderItemStatus: "OrderStatus", orderedItem: "Product", orderDelivery: "ParcelDelivery", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
