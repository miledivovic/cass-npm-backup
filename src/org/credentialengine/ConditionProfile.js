/**
 * credentialengine.org/ConditionProfile
 * Entity describing a constraint, prerequisite, entry condition, or requirement.
 * Constraints exist with credentials, learning opportunities, assessments and other entites to which they are subject during their lifecycles.
 * @author credentialengine.org
 * @class ConditionProfile
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class ConditionProfile extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.eduworks.com/simpleCtdl",
			"ConditionProfile"
		);
	}

	/**
	 * http://purl.org/ctdl/terms/alternativeCondition
	 * Constraints, prerequisites, entry conditions, or requirements in a context where more than one alternative condition or path has been defined and from which any one path fulfills the parent condition.
	 * A set of alternative conditions are not necessarily mutually exclusive paths; for example, a set of alternative concentrations for a degree may allow a person to optionally complete more than one concentration even though only one is required to earn the degree.
	 * @property alternativeCondition
	 * @type ConditionProfile
	 */
	alternativeCondition;

	/**
	 * http://purl.org/ctdl/terms/assertedBy
	 * Agent making a statement based on fact or belief.
	 * @property assertedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	assertedBy;

	/**
	 * http://purl.org/ctdl/terms/audienceLevelType
	 * Type of level indicating a point in a progression through an educational or training context, for which the credential is intended; select from an existing enumeration of such types.
	 * @property audienceLevelType
	 * @type CredentialAlignmentObject
	 */
	audienceLevelType;

	/**
	 * http://purl.org/ctdl/terms/audienceType
	 * The type of credential seeker for whom the entity is applicable; select from an existing enumeration of such types.
	 * @property audienceType
	 * @type CredentialAlignmentObject
	 */
	audienceType;

	/**
	 * http://purl.org/ctdl/terms/commonCosts
	 * Set of costs maintained at an organizational or sub-organizational level, which apply to this credential, assessment, or learning opportunity.
	 * @property commonCosts
	 * @type CostManifest
	 */
	commonCosts;

	/**
	 * http://purl.org/ctdl/terms/condition
	 * Single constraint, prerequisite, entry condition, requirement, or cost.
	 * @property condition
	 * @type langString
	 */
	condition;

	/**
	 * http://purl.org/ctdl/terms/creditUnitTypeDescription
	 * Detailed description of credit unit type.
	 * @property creditUnitTypeDescription
	 * @type langString
	 */
	creditUnitTypeDescription;

	/**
	 * http://purl.org/ctdl/terms/creditValue
	 * A credit-related value.
	 * @property creditValue
	 * @type ValueProfile
	 */
	creditValue;

	/**
	 * http://purl.org/ctdl/terms/dateEffective
	 * Effective date of the content of a credential, assessment or learning opportunity.
	 * @property dateEffective
	 * @type date
	 */
	dateEffective;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/estimatedCost
	 * Estimated cost of a credential, learning opportunity or assessment.
	 * @property estimatedCost
	 * @type CostProfile
	 */
	estimatedCost;

	/**
	 * http://purl.org/ctdl/terms/experience
	 * Amount and nature of required work, experiential learning or other relevant experience.
	 * @property experience
	 * @type langString
	 */
	experience;

	/**
	 * http://purl.org/ctdl/terms/jurisdiction
	 * Geographic or political region in which the credential is formally applicable or an organization has authority to act.
	 * @property jurisdiction
	 * @type JurisdictionProfile
	 */
	jurisdiction;

	/**
	 * http://purl.org/ctdl/terms/minimumAge
	 * Minimum allowed age at which a person is eligible for the credential.
	 * @property minimumAge
	 * @type integer
	 */
	minimumAge;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/residentOf
	 * Geographic or political region of which a person must be a legal resident or citizen in order to be eligible for the credential.
	 * Residency defines the duration of stay required by national, state, provincial or local laws that entitles a person to the legal protection and benefits provided to the applicable type.
	 * @property residentOf
	 * @type JurisdictionProfile
	 */
	residentOf;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

	/**
	 * http://purl.org/ctdl/terms/submissionOf
	 * Artifact to be submitted such as a transcript, portfolio, or an affidavit.
	 * @property submissionOf
	 * @type anyURI
	 */
	submissionOf;

	/**
	 * http://purl.org/ctdl/terms/submissionOfDescription
	 * Name, label, or description of an artifact to be submitted such as a transcript, portfolio, or an affidavit.
	 * @property submissionOfDescription
	 * @type langString
	 */
	submissionOfDescription;

	/**
	 * http://purl.org/ctdl/terms/targetAssessment
	 * Assessment that provides direct, indirect, formative or summative evaluation or estimation of the nature, ability, or quality for an entity.
	 * @property targetAssessment
	 * @type Assessment | AssessmentProfile
	 */
	targetAssessment;

	/**
	 * http://purl.org/ctdl/terms/targetCompetency
	 * A competency relevant to the condition being described.
	 * @property targetCompetency
	 * @type Competency | CredentialAlignmentObject
	 */
	targetCompetency;

	/**
	 * http://purl.org/ctdl/terms/targetCredential
	 * Credential that is a focus or target of the condition, process or verification service.
	 * @property targetCredential
	 * @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	targetCredential;

	/**
	 * http://purl.org/ctdl/terms/targetLearningOpportunity
	 * Learning opportunity that is the focus of a condition, process or another learning opportunity.
	 * @property targetLearningOpportunity
	 * @type LearningOpportunity | LearningOpportunityProfile
	 */
	targetLearningOpportunity;

	/**
	 * http://purl.org/ctdl/terms/weight
	 * Measurement of the weight, degree, percent, or strength of a recommendation, requirement, or comparison.
	 * @property weight
	 * @type float
	 */
	weight;

	/**
	 * http://purl.org/ctdl/terms/yearsOfExperience
	 * Years of relevant experience.
	 * @property yearsOfExperience
	 * @type float
	 */
	yearsOfExperience;
};
