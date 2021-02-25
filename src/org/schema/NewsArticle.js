/**
 *  Schema.org/NewsArticle
 *  A news article.
 * 
 *  @author schema.org
 *  @class NewsArticle
 *  @module org.schema
 *  @extends Article
 */
var NewsArticle = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Article.call(this);
    this.context = "http://schema.org/";
    this.type = "NewsArticle";
};
NewsArticle = stjs.extend(NewsArticle, Article, [], function(constructor, prototype) {
    /**
     *  Schema.org/printColumn
     *  The number of the column in which the NewsArticle appears in the print edition.
     * 
     *  @property printColumn
     *  @type Text
     */
    prototype.printColumn = null;
    /**
     *  Schema.org/printEdition
     *  The edition of the print product in which the NewsArticle appears.
     * 
     *  @property printEdition
     *  @type Text
     */
    prototype.printEdition = null;
    /**
     *  Schema.org/printSection
     *  If this NewsArticle appears in print, this field indicates the print section in which the article appeared.
     * 
     *  @property printSection
     *  @type Text
     */
    prototype.printSection = null;
    /**
     *  Schema.org/printPage
     *  If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).
     * 
     *  @property printPage
     *  @type Text
     */
    prototype.printPage = null;
    /**
     *  Schema.org/dateline
     *  The location where the NewsArticle was produced.
     * 
     *  @property dateline
     *  @type Text
     */
    prototype.dateline = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
