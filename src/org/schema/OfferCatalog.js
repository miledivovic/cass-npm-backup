/**
 *  Schema.org/OfferCatalog
 *  An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
 * 
 *  @author schema.org
 *  @class OfferCatalog
 *  @module org.schema
 *  @extends ItemList
 */
var OfferCatalog = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ItemList.call(this);
    this.context = "http://schema.org/";
    this.type = "OfferCatalog";
};
OfferCatalog = stjs.extend(OfferCatalog, ItemList, [], null, {itemListElement: "ListItem", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
