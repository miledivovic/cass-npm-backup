/**
 *  credentialengine.org/TaskProfile
 *  Entity describing the required or recommended tasks to be performed by a holder of, or applicant for, a credential.
 *  @author credentialengine.org
 *  @class TaskProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var TaskProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "TaskProfile";
};
TaskProfile = stjs.extend(TaskProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/affiliatedAgent
     *  Organization or person that plays some role in assigning, performing, assisting with, facilitating, approving of, or otherwise being involved with the task being described.
     *  @property affiliatedAgent
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.affiliatedAgent = null;
    /**
     *  http://purl.org/ctdl/terms/availabilityListing
     *  Listing of online and/or physical locations where a credential can be pursued.
     *  @property availabilityListing
     *  @type anyURI
     */
    prototype.availabilityListing = null;
    /**
     *  http://purl.org/ctdl/terms/availableAt
     *  Physical location where the credential, assessment, or learning opportunity can be pursued.
     *  @property availableAt
     *  @type Place
     */
    prototype.availableAt = null;
    /**
     *  http://purl.org/ctdl/terms/availableOnlineAt
     *  Online location where the credential, assessment, or learning opportunity can be pursued.
     *  @property availableOnlineAt
     *  @type anyURI
     */
    prototype.availableOnlineAt = null;
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
     *  http://purl.org/ctdl/terms/estimatedCost
     *  Estimated cost of a credential, learning opportunity or assessment.
     *  @property estimatedCost
     *  @type CostProfile
     */
    prototype.estimatedCost = null;
    /**
     *  http://purl.org/ctdl/terms/estimatedDuration
     *  Estimated time it will take to complete a credential, learning opportunity or assessment.
     *  @property estimatedDuration
     *  @type DurationProfile
     */
    prototype.estimatedDuration = null;
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
     *  http://purl.org/ctdl/terms/taskDetails
     *  Webpage or online document that provides additional information about the task.
     *  @property taskDetails
     *  @type anyURI
     */
    prototype.taskDetails = null;
}, {affiliatedAgent: "Object", availableAt: "Place", estimatedCost: "CostProfile", estimatedDuration: "DurationProfile", jurisdiction: "JurisdictionProfile", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
