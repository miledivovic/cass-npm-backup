/**
 *  Schema.org/ItemAvailability
 *  A list of possible product availability options.
 * 
 *  @author schema.org
 *  @class ItemAvailability
 *  @module org.schema
 *  @extends Enumeration
 */
var ItemAvailability = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "ItemAvailability";
};
ItemAvailability = stjs.extend(ItemAvailability, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
