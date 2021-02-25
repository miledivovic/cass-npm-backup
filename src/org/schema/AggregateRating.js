/**
 *  Schema.org/AggregateRating
 *  The average rating based on multiple ratings or reviews.
 * 
 *  @author schema.org
 *  @class AggregateRating
 *  @module org.schema
 *  @extends Rating
 */
var AggregateRating = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Rating.call(this);
    this.context = "http://schema.org/";
    this.type = "AggregateRating";
};
AggregateRating = stjs.extend(AggregateRating, Rating, [], function(constructor, prototype) {
    /**
     *  Schema.org/itemReviewed
     *  The item that is being reviewed/rated.
     * 
     *  @property itemReviewed
     *  @type Thing
     */
    prototype.itemReviewed = null;
    /**
     *  Schema.org/reviewCount
     *  The count of total number of reviews.
     * 
     *  @property reviewCount
     *  @type Integer
     */
    prototype.reviewCount = null;
    /**
     *  Schema.org/ratingCount
     *  The count of total number of ratings.
     * 
     *  @property ratingCount
     *  @type Integer
     */
    prototype.ratingCount = null;
}, {itemReviewed: "Thing", author: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
