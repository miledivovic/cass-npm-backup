/**
 *  Schema.org/ItemListOrderType
 *  Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 * 
 *  @author schema.org
 *  @class ItemListOrderType
 *  @module org.schema
 *  @extends Enumeration
 */
var ItemListOrderType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "ItemListOrderType";
};
ItemListOrderType = stjs.extend(ItemListOrderType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
