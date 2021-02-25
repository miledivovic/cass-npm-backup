/**
 *  Schema.org/MobileApplication
 *  A software application designed specifically to work well on a mobile device such as a telephone.
 * 
 *  @author schema.org
 *  @class MobileApplication
 *  @module org.schema
 *  @extends SoftwareApplication
 */
var MobileApplication = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SoftwareApplication.call(this);
    this.context = "http://schema.org/";
    this.type = "MobileApplication";
};
MobileApplication = stjs.extend(MobileApplication, SoftwareApplication, [], function(constructor, prototype) {
    /**
     *  Schema.org/carrierRequirements
     *  Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).
     * 
     *  @property carrierRequirements
     *  @type Text
     */
    prototype.carrierRequirements = null;
}, {softwareHelp: "CreativeWork", softwareAddOn: "SoftwareApplication", supportingData: "DataFeed", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
