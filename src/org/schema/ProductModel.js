/**
 *  Schema.org/ProductModel
 *  A datasheet or vendor specification of a product (in the sense of a prototypical description).
 * 
 *  @author schema.org
 *  @class ProductModel
 *  @module org.schema
 *  @extends Product
 */
var ProductModel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Product.call(this);
    this.context = "http://schema.org/";
    this.type = "ProductModel";
};
ProductModel = stjs.extend(ProductModel, Product, [], function(constructor, prototype) {
    /**
     *  Schema.org/predecessorOf
     *  A pointer from a previous, often discontinued variant of the product to its newer variant.
     * 
     *  @property predecessorOf
     *  @type ProductModel
     */
    prototype.predecessorOf = null;
    /**
     *  Schema.org/successorOf
     *  A pointer from a newer variant of a product  to its previous, often discontinued predecessor.
     * 
     *  @property successorOf
     *  @type ProductModel
     */
    prototype.successorOf = null;
    /**
     *  Schema.org/isVariantOf
     *  A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.
     * 
     *  @property isVariantOf
     *  @type ProductModel
     */
    prototype.isVariantOf = null;
}, {predecessorOf: "ProductModel", successorOf: "ProductModel", isVariantOf: "ProductModel", manufacturer: "Organization", audience: "Audience", height: "Distance", reviews: "Review", aggregateRating: "AggregateRating", isConsumableFor: "Product", offers: "Offer", width: "Distance", additionalProperty: "PropertyValue", isAccessoryOrSparePartFor: "Product", logo: "ImageObject", weight: "QuantitativeValue", depth: "Distance", isSimilarTo: "Product", isRelatedTo: "Product", review: "Review", itemCondition: "OfferItemCondition", brand: "Organization", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
