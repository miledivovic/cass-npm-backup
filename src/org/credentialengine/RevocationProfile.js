/**
 *  credentialengine.org/RevocationProfile
 *  Entity describing conditions and methods by which a credential can be removed from a holder.
 *  @author credentialengine.org
 *  @class RevocationProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var RevocationProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "RevocationProfile";
};
RevocationProfile = stjs.extend(RevocationProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/dateEffective
     *  Effective date of the content of a credential, assessment or learning opportunity.
     *  @property dateEffective
     *  @type date
     */
    prototype.dateEffective = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/revocationCriteria
     *  Webpage or online document that provides information about the removal criteria for an awarded credential.
     *  @property revocationCriteria
     *  @type anyURI
     */
    prototype.revocationCriteria = null;
    /**
     *  http://purl.org/ctdl/terms/revocationCriteriaDescription
     *  Textual description providing information about the removal criteria for an awarded credential.
     *  @property revocationCriteriaDescription
     *  @type langString
     */
    prototype.revocationCriteriaDescription = null;
}, {jurisdiction: "JurisdictionProfile", region: "Place", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
