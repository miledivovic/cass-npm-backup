/**
 *  Schema.org/OfferItemCondition
 *  A list of possible conditions for the item.
 * 
 *  @author schema.org
 *  @class OfferItemCondition
 *  @module org.schema
 *  @extends Enumeration
 */
var OfferItemCondition = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "OfferItemCondition";
};
OfferItemCondition = stjs.extend(OfferItemCondition, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
