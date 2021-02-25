/**
 *  Schema.org/Brand
 *  A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 * 
 *  @author schema.org
 *  @class Brand
 *  @module org.schema
 *  @extends Intangible
 */
var Brand = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Brand";
};
Brand = stjs.extend(Brand, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/aggregateRating
     *  The overall rating, based on a collection of reviews or ratings, of the item.
     * 
     *  @property aggregateRating
     *  @type AggregateRating
     */
    prototype.aggregateRating = null;
    /**
     *  Schema.org/logo
     *  An associated logo.
     * 
     *  @property logo
     *  @type ImageObject
     */
    prototype.logo = null;
    /**
     *  Schema.org/review
     *  A review of the item.
     * 
     *  @property review
     *  @type Review
     */
    prototype.review = null;
}, {aggregateRating: "AggregateRating", logo: "ImageObject", review: "Review", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
