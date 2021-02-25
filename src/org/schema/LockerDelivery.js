/**
 *  Schema.org/LockerDelivery
 *  A DeliveryMethod in which an item is made available via locker.
 * 
 *  @author schema.org
 *  @class LockerDelivery
 *  @module org.schema
 *  @extends DeliveryMethod
 */
var LockerDelivery = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    DeliveryMethod.call(this);
    this.context = "http://schema.org/";
    this.type = "LockerDelivery";
};
LockerDelivery = stjs.extend(LockerDelivery, DeliveryMethod, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
