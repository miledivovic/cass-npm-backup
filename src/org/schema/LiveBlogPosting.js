/**
 *  Schema.org/LiveBlogPosting
 *  A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 * 
 *  @author schema.org
 *  @class LiveBlogPosting
 *  @module org.schema
 *  @extends BlogPosting
 */
var LiveBlogPosting = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    BlogPosting.call(this);
    this.context = "http://schema.org/";
    this.type = "LiveBlogPosting";
};
LiveBlogPosting = stjs.extend(LiveBlogPosting, BlogPosting, [], function(constructor, prototype) {
    /**
     *  Schema.org/coverageStartTime
     *  The time when the live blog will begin covering the SchemaEvent. Note that coverage may begin before the SchemaEvent's start time. The LiveBlogPosting may also be created before coverage begins.
     * 
     *  @property coverageStartTime
     *  @type DateTime
     */
    coverageStartTime = null;
    /**
     *  Schema.org/coverageEndTime
     *  The time when the live blog will stop covering the SchemaEvent. Note that coverage may continue after the SchemaEvent concludes.
     * 
     *  @property coverageEndTime
     *  @type DateTime
     */
    coverageEndTime = null;
    /**
     *  Schema.org/liveBlogUpdate
     *  An update to the LiveBlog.
     * 
     *  @property liveBlogUpdate
     *  @type BlogPosting
     */
    liveBlogUpdate = null;
}, {liveBlogUpdate: "BlogPosting", sharedContent: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
