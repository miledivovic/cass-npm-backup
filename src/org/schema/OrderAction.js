/**
 *  Schema.org/OrderAction
 *  An agent orders an object/product/service to be delivered/sent.
 * 
 *  @author schema.org
 *  @class OrderAction
 *  @module org.schema
 *  @extends TradeAction
 */
var OrderAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TradeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "OrderAction";
};
OrderAction = stjs.extend(OrderAction, TradeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/deliveryMethod
     *  A sub property of instrument. The method of delivery.
     * 
     *  @property deliveryMethod
     *  @type DeliveryMethod
     */
    prototype.deliveryMethod = null;
}, {deliveryMethod: "DeliveryMethod", priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
