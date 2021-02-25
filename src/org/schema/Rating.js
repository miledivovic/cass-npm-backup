/**
 *  Schema.org/Rating
 *  A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 * 
 *  @author schema.org
 *  @class Rating
 *  @module org.schema
 *  @extends Intangible
 */
var Rating = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Rating";
};
Rating = stjs.extend(Rating, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/ratingValue
     *  The rating for the content.
     * 
     *  @property ratingValue
     *  @type Number
     */
    prototype.ratingValue = null;
    /**
     *  Schema.org/bestRating
     *  The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.
     * 
     *  @property bestRating
     *  @type Number
     */
    prototype.bestRating = null;
    /**
     *  Schema.org/author
     *  The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
     * 
     *  @property author
     *  @type Person
     */
    prototype.author = null;
    /**
     *  Schema.org/worstRating
     *  The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.
     * 
     *  @property worstRating
     *  @type Text
     */
    prototype.worstRating = null;
}, {author: "Person", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
