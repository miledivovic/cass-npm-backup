/**
 *  Schema.org/Review
 *  A review of an item - for example, of a restaurant, movie, or store.
 * 
 *  @author schema.org
 *  @class Review
 *  @module org.schema
 *  @extends CreativeWork
 */
var Review = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Review";
};
Review = stjs.extend(Review, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/reviewRating
     *  The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.
     * 
     *  @property reviewRating
     *  @type Rating
     */
    prototype.reviewRating = null;
    /**
     *  Schema.org/itemReviewed
     *  The item that is being reviewed/rated.
     * 
     *  @property itemReviewed
     *  @type Thing
     */
    prototype.itemReviewed = null;
    /**
     *  Schema.org/reviewBody
     *  The actual body of the review.
     * 
     *  @property reviewBody
     *  @type Text
     */
    prototype.reviewBody = null;
}, {reviewRating: "Rating", itemReviewed: "Thing", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
