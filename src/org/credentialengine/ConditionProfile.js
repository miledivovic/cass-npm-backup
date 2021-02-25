/**
 *  credentialengine.org/ConditionProfile
 *  Entity describing a constraint, prerequisite, entry condition, or requirement.
 *  Constraints exist with credentials, learning opportunities, assessments and other entites to which they are subject during their lifecycles.
 *  @author credentialengine.org
 *  @class ConditionProfile
 *  @module org.credentialengine
 *  @extends CreativeWork
 */
var ConditionProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "ConditionProfile";
};
ConditionProfile = stjs.extend(ConditionProfile, CreativeWork, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/alternativeCondition
     *  Constraints, prerequisites, entry conditions, or requirementst in a context where more than one alternative condition or path has been defined and from which any one path fulfills the parent condition.
     *  A set of alternative conditions are not necessarily mutually exclusive paths; for example, a set of alternative concentrations for a degree may allow a person to optionally complete more than one concentration even though only one is required to earn the degree.
     *  @property alternativeCondition
     *  @type ConditionProfile
     */
    prototype.alternativeCondition = null;
    /**
     *  http://purl.org/ctdl/terms/assertedBy
     *  Agent making a statement based on fact or belief.
     *  @property assertedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.assertedBy = null;
    /**
     *  http://purl.org/ctdl/terms/audienceLevelType
     *  Type of level indicating a point in a progression through an educational or training context, for which the credential is intended; select from an existing enumeration of such types.
     *  @property audienceLevelType
     *  @type CredentialAlignmentObject
     */
    prototype.audienceLevelType = null;
    /**
     *  http://purl.org/ctdl/terms/audienceType
     *  The type of credential seeker for whom the entity is applicable; select from an existing enumeration of such types.
     *  @property audienceType
     *  @type CredentialAlignmentObject
     */
    prototype.audienceType = null;
    /**
     *  http://purl.org/ctdl/terms/commonCosts
     *  Set of costs maintained at an organizational or sub-organizational level, which apply to this credential, assessment, or learning opportunity.
     *  @property commonCosts
     *  @type CostManifest
     */
    prototype.commonCosts = null;
    /**
     *  http://purl.org/ctdl/terms/condition
     *  Single constraint, prerequisite, entry condition, requirement, or cost.
     *  @property condition
     *  @type langString
     */
    prototype.condition = null;
    /**
     *  http://purl.org/ctdl/terms/creditHourType
     *  Type of unit of time corresponding to type of credit such as semester hours, quarter hours, clock hours, or hours of participation.
     *  @property creditHourType
     *  @type langString
     */
    prototype.creditHourType = null;
    /**
     *  http://purl.org/ctdl/terms/creditHourValue
     *  Number of credit hours awarded for successful completion of a learning opportunity or assessment.
     *  @property creditHourValue
     *  @type float
     */
    prototype.creditHourValue = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitType
     *  Type of credit associated with both degree and non-degree learning opportunities; select from an existing enumeration of such types.
     *  @property creditUnitType
     *  @type CredentialAlignmentObject
     */
    prototype.creditUnitType = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitTypeDescription
     *  Detailed description of credit unit type.
     *  @property creditUnitTypeDescription
     *  @type langString
     */
    prototype.creditUnitTypeDescription = null;
    /**
     *  http://purl.org/ctdl/terms/creditUnitValue
     *  Number of either credit units awarded for college credit or continuing education units for successful completion of the learning opportunity or assessment.
     *  @property creditUnitValue
     *  @type float
     */
    prototype.creditUnitValue = null;
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
     *  http://purl.org/ctdl/terms/experience
     *  Amount and nature of required work, experiential learning or other relevant experience.
     *  @property experience
     *  @type langString
     */
    prototype.experience = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/minimumAge
     *  Minimum allowed age at which a person is eligible for the credential.
     *  @property minimumAge
     *  @type integer
     */
    prototype.minimumAge = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/residentOf
     *  Geographic or political region of which a person must be a legal resident or citizen in order to be eligible for the credential.
     *  Residency defines the duration of stay required by national, state, provincial or local laws that entitles a person to the legal protection and benefits provided to the applicable type.
     *  @property residentOf
     *  @type JurisdictionProfile
     */
    prototype.residentOf = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/submissionOf
     *  Artifact to be submitted such as a transcript, portfolio, or an affidavit.
     *  @property submissionOf
     *  @type langString
     */
    prototype.submissionOf = null;
    /**
     *  http://purl.org/ctdl/terms/targetAssessment
     *  Assessment that provides direct, indirect, formative or summative evaluation or estimation of the nature, ability, or quality for an entity.
     *  @property targetAssessment
     *  @type Assessment | AssessmentProfile
     */
    prototype.targetAssessment = null;
    /**
     *  http://purl.org/ctdl/terms/targetCompetency
     *  A competency relevant to the condition being described.
     *  @property targetCompetency
     *  @type Competency | CredentialAlignmentObject
     */
    prototype.targetCompetency = null;
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
     *  http://purl.org/ctdl/terms/targetPathway
     *  Career pathway in which the credential is a potential component.
     *  @property targetPathway
     *  @type CareerPathway
     */
    prototype.targetPathway = null;
    /**
     *  http://purl.org/ctdl/terms/targetTask
     *  Task to be completed.
     *  @property targetTask
     *  @type TaskProfile
     */
    prototype.targetTask = null;
    /**
     *  http://purl.org/ctdl/terms/weight
     *  Measurement of the weight, degree, percent, or strength of a recommendation, requirement, or comparison.
     *  @property weight
     *  @type float
     */
    prototype.weight = null;
    /**
     *  http://purl.org/ctdl/terms/yearsOfExperience
     *  Years of relevant experience.
     *  @property yearsOfExperience
     *  @type float
     */
    prototype.yearsOfExperience = null;
}, {alternativeCondition: "ConditionProfile", assertedBy: "Object", audienceLevelType: "CredentialAlignmentObject", audienceType: "CredentialAlignmentObject", commonCosts: "CostManifest", creditUnitType: "CredentialAlignmentObject", estimatedCost: "CostProfile", jurisdiction: "JurisdictionProfile", residentOf: "JurisdictionProfile", targetAssessment: "Object", targetCompetency: "Object", targetCredential: "Object", targetLearningOpportunity: "Object", targetPathway: "CareerPathway", targetTask: "TaskProfile", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
