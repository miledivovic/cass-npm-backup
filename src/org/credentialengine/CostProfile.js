/**
 *  credentialengine.org/CostProfile
 *  Entity that describes direct costs one would incur if one were to pursue a credential, assessment, learning opportunity, or aspects thereof.
 *  @author credentialengine.org
 *  @class CostProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var CostProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "CostProfile";
};
CostProfile = stjs.extend(CostProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/audienceType
     *  The type of credential seeker for whom the entity is applicable; select from an existing enumeration of such types.
     *  @property audienceType
     *  @type CredentialAlignmentObject
     */
    prototype.audienceType = null;
    /**
     *  http://purl.org/ctdl/terms/condition
     *  Single constraint, prerequisite, entry condition, requirement, or cost.
     *  @property condition
     *  @type langString
     */
    prototype.condition = null;
    /**
     *  http://purl.org/ctdl/terms/costDetails
     *  Webpage or online document containing human-readable, in-depth information about costs.
     *  @property costDetails
     *  @type anyURI
     */
    prototype.costDetails = null;
    /**
     *  http://purl.org/ctdl/terms/currency
     *  Currency in which the monetary amount is expressed in 3-letter ISO 4217 format such as "USD".
     *  @property currency
     *  @type string
     */
    prototype.currency = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/directCostType
     *  Types of direct costs associated with earning or completing a credential, assessment or learning opportunity; select from an existing enumeration of such types.
     *  @property directCostType
     *  @type CredentialAlignmentObject
     */
    prototype.directCostType = null;
    /**
     *  http://purl.org/ctdl/terms/endDate
     *  Date some event or activity ends.
     *  @property endDate
     *  @type date
     */
    prototype.endDate = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/paymentPattern
     *  Applicable pattern for payments such as "per sementer" and "every three months".
     *  @property paymentPattern
     *  @type langString
     */
    prototype.paymentPattern = null;
    /**
     *  http://purl.org/ctdl/terms/price
     *  Offer price of a credential, learning resource, assessment, related activity or resource.
     *  @property price
     *  @type integer
     */
    prototype.price = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/residencyType
     *  Type of legal residency status of a person; select from an existing enumeration of such types.
     *  Residency defines the duration of stay required by national, state, provincial or local laws that entitles a person to the legal protection and benefits provided to the applicable type.
     *  @property residencyType
     *  @type CredentialAlignmentObject
     */
    prototype.residencyType = null;
    /**
     *  http://purl.org/ctdl/terms/startDate
     *  Date the validity or usefulness of the information in this resource begins.
     *  @property startDate
     *  @type date
     */
    prototype.startDate = null;
}, {audienceType: "CredentialAlignmentObject", directCostType: "CredentialAlignmentObject", jurisdiction: "JurisdictionProfile", region: "Place", residencyType: "CredentialAlignmentObject", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
