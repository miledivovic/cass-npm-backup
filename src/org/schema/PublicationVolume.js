/**
 *  Schema.org/PublicationVolume
 *  A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.
 *  <p>
 *  <br/><br/>See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.
 * 
 *  @author schema.org
 *  @class PublicationVolume
 *  @module org.schema
 *  @extends CreativeWork
 */
var PublicationVolume = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "PublicationVolume";
};
PublicationVolume = stjs.extend(PublicationVolume, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/pagination
     *  Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
     * 
     *  @property pagination
     *  @type Text
     */
    prototype.pagination = null;
    /**
     *  Schema.org/pageEnd
     *  The page on which the work ends; for example "138" or "xvi".
     * 
     *  @property pageEnd
     *  @type Integer
     */
    prototype.pageEnd = null;
    /**
     *  Schema.org/volumeNumber
     *  Identifies the volume of publication or multi-part work; for example, "iii" or "2".
     * 
     *  @property volumeNumber
     *  @type Integer
     */
    prototype.volumeNumber = null;
    /**
     *  Schema.org/pageStart
     *  The page on which the work starts; for example "135" or "xiii".
     * 
     *  @property pageStart
     *  @type Integer
     */
    prototype.pageStart = null;
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
