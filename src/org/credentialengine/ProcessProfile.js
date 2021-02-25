/**
 *  credentialengine.org/ProcessProfile
 *  Entity describing the type, nature, and other relevant information about a process related to a credential.
 *  @author credentialengine.org
 *  @class ProcessProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var ProcessProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "ProcessProfile";
};
ProcessProfile = stjs.extend(ProcessProfile, CreativeWork, [], function(constructor, prototype) {
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
     *  http://purl.org/ctdl/terms/externalInputType
     *  Types of external stakeholders that provide input to an entity's processes or resources; select from an existing enumeration of such types.
     *  @property externalInputType
     *  @type CredentialAlignmentObject
     */
    prototype.externalInputType = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/processFrequency
     *  Interval of process occurence.
     *  @property processFrequency
     *  @type langString
     */
    prototype.processFrequency = null;
    /**
     *  http://purl.org/ctdl/terms/processingAgent
     *  Organization or person performing the process.
     *  @property processingAgent
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.processingAgent = null;
    /**
     *  http://purl.org/ctdl/terms/processMethod
     *  Webpage or online document that describes the process methods.
     *  @property processMethod
     *  @type anyURI
     */
    prototype.processMethod = null;
    /**
     *  http://purl.org/ctdl/terms/processMethodDescription
     *  Textual description of the process methods.
     *  @property processMethodDescription
     *  @type langString
     */
    prototype.processMethodDescription = null;
    /**
     *  http://purl.org/ctdl/terms/processStandards
     *  Webpage or online document that describes the criteria, standards, and/or requirements used with a process.
     *  @property processStandards
     *  @type anyURI
     */
    prototype.processStandards = null;
    /**
     *  http://purl.org/ctdl/terms/processStandardsDescription
     *  Textual description of the criteria, standards, and/or requirements used with a process.
     *  @property processStandardsDescription
     *  @type langString
     */
    prototype.processStandardsDescription = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/scoringMethodDescription
     *  Textual description of the method used to score the assessment.
     *  @property scoringMethodDescription
     *  @type langString
     */
    prototype.scoringMethodDescription = null;
    /**
     *  http://purl.org/ctdl/terms/scoringMethodExample
     *  Webpage or online document providing an example of the method or tool used to score the assessment.
     *  @property scoringMethodExample
     *  @type anyURI
     */
    prototype.scoringMethodExample = null;
    /**
     *  http://purl.org/ctdl/terms/scoringMethodExampleDescription
     *  Textual example of the method or tool used to score the assessment.
     *  @property scoringMethodExampleDescription
     *  @type langString
     */
    prototype.scoringMethodExampleDescription = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/targetAssessment
     *  Assessment that provides direct, indirect, formative or summative evaluation or estimation of the nature, ability, or quality for an entity.
     *  @property targetAssessment
     *  @type Assessment | AssessmentProfile
     */
    prototype.targetAssessment = null;
    /**
     *  http://purl.org/ctdl/terms/targetCompetencyFramework
     *  Competency framework relevant to the process being described.
     *  @property targetCompetencyFramework
     *  @type CompetencyFramework | CredentialAlignmentObject
     */
    prototype.targetCompetencyFramework = null;
    /**
     *  http://purl.org/ctdl/terms/targetCredential
     *  Credential that is a focus or target of the condition, process or verification service.
     *  @property targetCredential
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.targetCredential = null;
    /**
     *  http://purl.org/ctdl/terms/targetLearningOpportunity
     *  Learning opportunity that is the focus of a condition, process or another learning opportunity.
     *  @property targetLearningOpportunity
     *  @type LearningOpportunity | LearningOpportunityProfile
     */
    prototype.targetLearningOpportunity = null;
    /**
     *  http://purl.org/ctdl/terms/verificationMethodDescription
     *  Textual description of the methods used to evaluate an assessment, learning opportunity, process or verificaiton service for validity or reliability.
     *  @property verificationMethodDescription
     *  @type langString
     */
    prototype.verificationMethodDescription = null;
}, {externalInputType: "CredentialAlignmentObject", jurisdiction: "JurisdictionProfile", processingAgent: "Object", region: "Place", targetAssessment: "Object", targetCompetencyFramework: "Object", targetCredential: "Object", targetLearningOpportunity: "Object", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
