/**
 *  credentialengine.org/JurisdictionProfile
 *  Geo-political information about applicable geographic areas and their exceptions.
 *  @author credentialengine.org
 *  @class JurisdictionProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var JurisdictionProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "JurisdictionProfile";
};
JurisdictionProfile = stjs.extend(JurisdictionProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/assertedBy
     *  Agent making a statement based on fact or belief.
     *  @property assertedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.assertedBy = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/globalJurisdiction
     *  Whether or not the credential is useful, applicable or recognized everywhere.
     *  Exceptions indicated by the ceterms:jurisdictionException property apply.
     *  @property globalJurisdiction
     *  @type boolean
     */
    prototype.globalJurisdiction = false;
    /**
     *  http://purl.org/ctdl/terms/jurisdictionException
     *  Geographic or political region in which the credential is not formally recognized or an organization has no authority to act .
     *  The ceterms:jurisdictionalException property is used in conjunction with the ceterms:jurisdiction property and expresses any exceptions to a more general statement; e.g., the United states except for Colorado.
     *  @property jurisdictionException
     *  @type Place
     */
    prototype.jurisdictionException = null;
    /**
     *  http://purl.org/ctdl/terms/mainJurisdiction
     *  Primary geographic or political region in which the credential is recognized as applicable or in which an organization has recognized authority to act.
     *  @property mainJurisdiction
     *  @type Place
     */
    prototype.mainJurisdiction = null;
}, {assertedBy: "Object", jurisdictionException: "Place", mainJurisdiction: "Place", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
