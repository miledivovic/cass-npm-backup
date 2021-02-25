/**
 *  Schema.org/SocialMediaPosting
 *  A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 * 
 *  @author schema.org
 *  @class SocialMediaPosting
 *  @module org.schema
 *  @extends Article
 */
var SocialMediaPosting = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Article.call(this);
    this.context = "http://schema.org/";
    this.type = "SocialMediaPosting";
};
SocialMediaPosting = stjs.extend(SocialMediaPosting, Article, [], function(constructor, prototype) {
    /**
     *  Schema.org/sharedContent
     *  A CreativeWork such as an image, video, or audio clip shared as part of this posting.
     * 
     *  @property sharedContent
     *  @type CreativeWork
     */
    prototype.sharedContent = null;
}, {sharedContent: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
