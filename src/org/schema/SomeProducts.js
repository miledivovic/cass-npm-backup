/**
 *  Schema.org/SomeProducts
 *  A placeholder for multiple similar products of the same kind.
 * 
 *  @author schema.org
 *  @class SomeProducts
 *  @module org.schema
 *  @extends Product
 */
var SomeProducts = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Product.call(this);
    this.context = "http://schema.org/";
    this.type = "SomeProducts";
};
SomeProducts = stjs.extend(SomeProducts, Product, [], function(constructor, prototype) {
    /**
     *  Schema.org/inventoryLevel
     *  The current approximate inventory level for the item or items.
     * 
     *  @property inventoryLevel
     *  @type QuantitativeValue
     */
    inventoryLevel = null;
}, {inventoryLevel: "QuantitativeValue", manufacturer: "Organization", audience: "Audience", height: "Distance", reviews: "Review", aggregateRating: "AggregateRating", isConsumableFor: "Product", offers: "Offer", width: "Distance", additionalProperty: "PropertyValue", isAccessoryOrSparePartFor: "Product", logo: "ImageObject", weight: "QuantitativeValue", depth: "Distance", isSimilarTo: "Product", isRelatedTo: "Product", review: "Review", itemCondition: "OfferItemCondition", brand: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
