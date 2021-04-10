/**
 *  Schema.org/Comment
 *  A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 * 
 *  @author schema.org
 *  @class Comment
 *  @module org.schema
 *  @extends CreativeWork
 */
var Comment = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Comment";
};
Comment = stjs.extend(Comment, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/parentItem
     *  The parent of a question, answer or item in general.
     * 
     *  @property parentItem
     *  @type Question
     */
    parentItem = null;
    /**
     *  Schema.org/upvoteCount
     *  The number of upvotes this question, answer or comment has received from the community.
     * 
     *  @property upvoteCount
     *  @type Integer
     */
    upvoteCount = null;
    /**
     *  Schema.org/downvoteCount
     *  The number of downvotes this question, answer or comment has received from the community.
     * 
     *  @property downvoteCount
     *  @type Integer
     */
    downvoteCount = null;
}, {parentItem: "Question", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
