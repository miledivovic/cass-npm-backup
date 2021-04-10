/**
 *  Schema.org/Article
 *  An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * 
 *  @author schema.org
 *  @class Article
 *  @module org.schema
 *  @extends CreativeWork
 */
var Article = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Article";
};
Article = stjs.extend(Article, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/pagination
     *  Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
     * 
     *  @property pagination
     *  @type Text
     */
    pagination = null;
    /**
     *  Schema.org/pageEnd
     *  The page on which the work ends; for example "138" or "xvi".
     * 
     *  @property pageEnd
     *  @type Integer
     */
    pageEnd = null;
    /**
     *  Schema.org/articleSection
     *  Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
     * 
     *  @property articleSection
     *  @type Text
     */
    articleSection = null;
    /**
     *  Schema.org/articleBody
     *  The actual body of the article.
     * 
     *  @property articleBody
     *  @type Text
     */
    articleBody = null;
    /**
     *  Schema.org/pageStart
     *  The page on which the work starts; for example "135" or "xiii".
     * 
     *  @property pageStart
     *  @type Integer
     */
    pageStart = null;
    /**
     *  Schema.org/wordCount
     *  The number of words in the text of the Article.
     * 
     *  @property wordCount
     *  @type Integer
     */
    wordCount = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
