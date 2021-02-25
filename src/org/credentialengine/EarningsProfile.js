/**
 *  credentialengine.org/EarningsProfile
 *  Entity that describes earning and related statistical information for a given credential.
 *  @author credentialengine.org
 *  @class EarningsProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var EarningsProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "EarningsProfile";
};
EarningsProfile = stjs.extend(EarningsProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/dateEffective
     *  Effective date of the content of a credential, assessment or learning opportunity.
     *  @property dateEffective
     *  @type date
     */
    prototype.dateEffective = null;
    /**
     *  http://purl.org/ctdl/terms/highEarnings
     *  Upper interquartile earnings.
     *  @property highEarnings
     *  @type integer
     */
    prototype.highEarnings = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/lowEarnings
     *  Lower interquartile earnings.
     *  @property lowEarnings
     *  @type integer
     */
    prototype.lowEarnings = null;
    /**
     *  http://purl.org/ctdl/terms/medianEarnings
     *  Median earnings.
     *  @property medianEarnings
     *  @type integer
     */
    prototype.medianEarnings = null;
    /**
     *  http://purl.org/ctdl/terms/postReceiptMonths
     *  Number of months after earning a credential when employment and earnings data is collected.
     *  Number of months usually range between 3 months (one quarter) to ten years.
     *  @property postReceiptMonths
     *  @type integer
     */
    prototype.postReceiptMonths = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/source
     *  Authoritative source of an entity's information.
     *  Citation or description of an authoritative souce from which information or description has been derived.
     *  @property source
     *  @type anyURI
     */
    prototype.source = null;
}, {jurisdiction: "JurisdictionProfile", region: "Place", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
