/**
 *  Schema.org/TechArticle
 *  A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 * 
 *  @author schema.org
 *  @class TechArticle
 *  @module org.schema
 *  @extends Article
 */
var TechArticle = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Article.call(this);
    this.context = "http://schema.org/";
    this.type = "TechArticle";
};
TechArticle = stjs.extend(TechArticle, Article, [], function(constructor, prototype) {
    /**
     *  Schema.org/dependencies
     *  Prerequisites needed to fulfill steps in article.
     * 
     *  @property dependencies
     *  @type Text
     */
    prototype.dependencies = null;
    /**
     *  Schema.org/proficiencyLevel
     *  Proficiency needed for this content; expected values: 'Beginner', 'Expert'.
     * 
     *  @property proficiencyLevel
     *  @type Text
     */
    prototype.proficiencyLevel = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
