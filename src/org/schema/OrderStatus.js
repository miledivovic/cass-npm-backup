/**
 *  Schema.org/OrderStatus
 *  Enumerated status values for Order.
 * 
 *  @author schema.org
 *  @class OrderStatus
 *  @module org.schema
 *  @extends Enumeration
 */
var OrderStatus = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "OrderStatus";
};
OrderStatus = stjs.extend(OrderStatus, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
