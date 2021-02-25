/**
 *  Schema.org/DataFeed
 *  A single feed providing structured information about one or more entities or topics.
 * 
 *  @author schema.org
 *  @class DataFeed
 *  @module org.schema
 *  @extends Dataset
 */
var DataFeed = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Dataset.call(this);
    this.context = "http://schema.org/";
    this.type = "DataFeed";
};
DataFeed = stjs.extend(DataFeed, Dataset, [], function(constructor, prototype) {
    /**
     *  Schema.org/dataFeedElement
     *  An item within in a data feed. Data feeds may have many elements.
     * 
     *  @property dataFeedElement
     *  @type Text
     */
    prototype.dataFeedElement = null;
}, {catalog: "DataCatalog", includedInDataCatalog: "DataCatalog", spatial: "Place", includedDataCatalog: "DataCatalog", distribution: "DataDownload", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
