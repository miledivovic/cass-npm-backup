/**
 *  Schema.org/Dataset
 *  A body of structured information describing some topic(s) of interest.
 * 
 *  @author schema.org
 *  @class Dataset
 *  @module org.schema
 *  @extends CreativeWork
 */
var Dataset = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Dataset";
};
Dataset = stjs.extend(Dataset, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/catalog
     *  A data catalog which contains this dataset.
     * 
     *  @property catalog
     *  @type DataCatalog
     */
    catalog = null;
    /**
     *  Schema.org/includedInDataCatalog
     *  A data catalog which contains this dataset.
     * 
     *  @property includedInDataCatalog
     *  @type DataCatalog
     */
    includedInDataCatalog = null;
    /**
     *  Schema.org/datasetTimeInterval
     *  The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
     * 
     *  @property datasetTimeInterval
     *  @type DateTime
     */
    datasetTimeInterval = null;
    /**
     *  Schema.org/spatial
     *  The range of spatial applicability of a dataset, e.g. for a dataset of New York weather, the state of New York.
     * 
     *  @property spatial
     *  @type Place
     */
    spatial = null;
    /**
     *  Schema.org/temporal
     *  The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
     * 
     *  @property temporal
     *  @type DateTime
     */
    temporal = null;
    /**
     *  Schema.org/includedDataCatalog
     *  A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
     * 
     *  @property includedDataCatalog
     *  @type DataCatalog
     */
    includedDataCatalog = null;
    /**
     *  Schema.org/distribution
     *  A downloadable form of this dataset, at a specific location, in a specific format.
     * 
     *  @property distribution
     *  @type DataDownload
     */
    distribution = null;
}, {catalog: "DataCatalog", includedInDataCatalog: "DataCatalog", spatial: "Place", includedDataCatalog: "DataCatalog", distribution: "DataDownload", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
