/**
 *  Schema.org/IndividualProduct
 *  A single, identifiable product instance (e.g. a laptop with a particular serial number).
 * 
 *  @author schema.org
 *  @class IndividualProduct
 *  @module org.schema
 *  @extends Product
 */
var IndividualProduct = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Product.call(this);
    this.context = "http://schema.org/";
    this.type = "IndividualProduct";
};
IndividualProduct = stjs.extend(IndividualProduct, Product, [], function(constructor, prototype) {
    /**
     *  Schema.org/serialNumber
     *  The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
     * 
     *  @property serialNumber
     *  @type Text
     */
    serialNumber = null;
}, {manufacturer: "Organization", audience: "Audience", height: "Distance", reviews: "Review", aggregateRating: "AggregateRating", isConsumableFor: "Product", offers: "Offer", width: "Distance", additionalProperty: "PropertyValue", isAccessoryOrSparePartFor: "Product", logo: "ImageObject", weight: "QuantitativeValue", depth: "Distance", isSimilarTo: "Product", isRelatedTo: "Product", review: "Review", itemCondition: "OfferItemCondition", brand: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
