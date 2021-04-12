/**
 * credentialengine.org/AssessmentProfile
 * Entity that describes the key characteristics of an assessment for a credential.
 * Characteristics described include, but are not limited to, processes for assessment development, maintenance, selection and evaluation as well as assessment examples.
 * @author credentialengine.org
 * @class AssessmentProfile
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class AssessmentProfile extends schema.CreativeWork
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		context="http://schema.eduworks.com/simpleCtdl";
		type="AssessmentProfile";
	}

	/**
	 * http://purl.org/ctdl/terms/accreditedBy
	 * Quality assurance organization that provides official authorization to, or approval of, a credential, organization, assessment, or learning opportunity.
	 * @property accreditedBy
	 * @type QACredentialOrganization
	 */
	accreditedBy;

	/**
	 * http://purl.org/ctdl/terms/accreditedIn
	 * Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or assessment is accredited.
	 * @property accreditedIn
	 * @type JurisdictionProfile
	 */
	accreditedIn;

	/**
	 * http://purl.org/ctdl/terms/administrationProcess
	 * Entity describing the process by which a credential, assessment, organization, or aspects of it, are administered.
	 * Processes described include the execution of events and the development of resources in the lifecycle of a credential or organization, such as the process for the proctoring of assessments.
	 * @property administrationProcess
	 * @type ProcessProfile
	 */
	administrationProcess;

	/**
	 * http://purl.org/ctdl/terms/advancedStandingFrom
	 * Credential that has its time or cost reduced by another credential, assessment or learning opportunity.
	 * @property advancedStandingFrom
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	advancedStandingFrom;

	/**
	 * http://purl.org/ctdl/terms/aggregateData
	 * Statistical information about the resource.
	 * @property aggregateData
	 * @type AggregateDataProfile
	 */
	aggregateData;

	/**
	 * http://purl.org/ctdl/terms/approvedBy
	 * Organization that pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
	 * @property approvedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	approvedBy;

	/**
	 * http://purl.org/ctdl/terms/approvedIn
	 * Region or political jurisdiction such as a state, province or locale in which an organization pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
	 * @property approvedIn
	 * @type JurisdictionProfile
	 */
	approvedIn;

	/**
	 * http://purl.org/ctdl/terms/assesses
	 * Competency evaluated through the assessment.
	 * @property assesses
	 * @type Competency | CredentialAlignmentObject
	 */
	assesses;

	/**
	 * http://purl.org/ctdl/terms/assessmentExample
	 * Example assessment or assessment item.
	 * @property assessmentExample
	 * @type anyURI
	 */
	assessmentExample;

	/**
	 * http://purl.org/ctdl/terms/assessmentExampleDescription
	 * Text of an example assessment or assessment item.
	 * @property assessmentExampleDescription
	 * @type langString
	 */
	assessmentExampleDescription;

	/**
	 * http://purl.org/ctdl/terms/assessmentMethodDescription
	 * Description of the methods used to conduct assessment.
	 * @property assessmentMethodDescription
	 * @type langString
	 */
	assessmentMethodDescription;

	/**
	 * http://purl.org/ctdl/terms/assessmentMethodType
	 * Type of method used to conduct an assessment; select from an existing enumeration of such types.
	 * @property assessmentMethodType
	 * @type CredentialAlignmentObject
	 */
	assessmentMethodType;

	/**
	 * http://purl.org/ctdl/terms/assessmentOutput
	 * Description of the assessment artifact, performance or examination.
	 * @property assessmentOutput
	 * @type langString
	 */
	assessmentOutput;

	/**
	 * http://purl.org/ctdl/terms/assessmentUseType
	 * Type of intended use of the assessment; select from an existing enumeration of such types.
	 * @property assessmentUseType
	 * @type CredentialAlignmentObject
	 */
	assessmentUseType;

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
	 * http://purl.org/ctdl/terms/availabilityListing
	 * Listing of online and/or physical locations where a credential can be pursued.
	 * @property availabilityListing
	 * @type anyURI
	 */
	availabilityListing;

	/**
	 * http://purl.org/ctdl/terms/availableAt
	 * Physical location where the credential, assessment, or learning opportunity can be pursued.
	 * @property availableAt
	 * @type Place
	 */
	availableAt;

	/**
	 * http://purl.org/ctdl/terms/availableOnlineAt
	 * Online location where the credential, assessment, or learning opportunity can be pursued.
	 * @property availableOnlineAt
	 * @type anyURI
	 */
	availableOnlineAt;

	/**
	 * http://purl.org/ctdl/terms/commonConditions
	 * Set constraints, prerequisites, entry conditions, or requirements that are shared across an organization, organizational subdivision, set of credentials, or category of entities and activities.
	 * @property commonConditions
	 * @type ConditionManifest
	 */
	commonConditions;

	/**
	 * http://purl.org/ctdl/terms/commonCosts
	 * Set of costs maintained at an organizational or sub-organizational level, which apply to this credential, assessment, or learning opportunity.
	 * @property commonCosts
	 * @type CostManifest
	 */
	commonCosts;

	/**
	 * http://purl.org/ctdl/terms/corequisite
	 * Credentials that must be pursued concurrently.
	 * Includes dual (double) degrees that cannot be earned independently of each other.
	 * @property corequisite
	 * @type ConditionProfile
	 */
	corequisite;

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
	 * http://purl.org/ctdl/terms/ctid
	 * Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a resource recognizes it in transactions with the external environment (e.g., in verifiable claims involving the resource).
	 * The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
	 * @property ctid
	 * @type string
	 */
	ctid;

	/**
	 * http://purl.org/ctdl/terms/dateEffective
	 * Effective date of the content of a credential, assessment or learning opportunity.
	 * @property dateEffective
	 * @type date
	 */
	dateEffective;

	/**
	 * http://purl.org/ctdl/terms/deliveryType
	 * Type of means by which a learning opportunity or assessment is delivered to credential seekers and by which they interact; select from an existing enumeration of such types.
	 * @property deliveryType
	 * @type CredentialAlignmentObject
	 */
	deliveryType;

	/**
	 * http://purl.org/ctdl/terms/deliveryTypeDescription
	 * Detailed description of the delivery type of an assessment or learning opportunity.
	 * @property deliveryTypeDescription
	 * @type langString
	 */
	deliveryTypeDescription;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/developmentProcess
	 * Entity describing the process by which a credential, or aspects of it, were created.
	 * @property developmentProcess
	 * @type ProcessProfile
	 */
	developmentProcess;

	/**
	 * http://purl.org/ctdl/terms/entryCondition
	 * Prerequisites for entry into a credentialing program, a learning opportunity or an assessment including transcripts, records of previous experience, and lower-level learning opportunities.
	 * @property entryCondition
	 * @type ConditionProfile
	 */
	entryCondition;

	/**
	 * http://purl.org/ctdl/terms/estimatedCost
	 * Estimated cost of a credential, learning opportunity or assessment.
	 * @property estimatedCost
	 * @type CostProfile
	 */
	estimatedCost;

	/**
	 * http://purl.org/ctdl/terms/estimatedDuration
	 * Estimated time it will take to complete a credential, learning opportunity or assessment.
	 * @property estimatedDuration
	 * @type DurationProfile
	 */
	estimatedDuration;

	/**
	 * http://purl.org/ctdl/terms/expirationDate
	 * Date beyond which the resource is no longer offered or available.
	 * Previously earned, completed, or attained resources may still be valid even if they are no longer offered.
	 * @property expirationDate
	 * @type date
	 */
	expirationDate;

	/**
	 * http://purl.org/ctdl/terms/externalResearch
	 * Research that supports or validates one or more aspects of the entity.
	 * @property externalResearch
	 * @type anyURI
	 */
	externalResearch;

	/**
	 * http://purl.org/ctdl/terms/financialAssistance
	 * Entity that describes financial assistance for which this credential, assessment, or learning opportunity qualifies.
	 * Whether the financial aid in question is associated with a credential, an assessment, or a learning opportunity is dependent on context.
	 * @property financialAssistance
	 * @type FinancialAssistanceProfile
	 */
	financialAssistance;

	/**
	 * http://purl.org/ctdl/terms/hasGroupEvaluation
	 * Whether or not the assessment activity is scored as a group.
	 * @property hasGroupEvaluation
	 * @type boolean
	 */
	hasGroupEvaluation;

	/**
	 * http://purl.org/ctdl/terms/hasGroupParticipation
	 * Whether or not two or more participants are required to complete the assessment activity.
	 * @property hasGroupParticipation
	 * @type boolean
	 */
	hasGroupParticipation;

	/**
	 * http://purl.org/ctdl/terms/identifier
	 * Alphanumeric token that identifies this resource and information about the token's originating context or scheme.
	 * @property identifier
	 * @type IdentifierValue
	 */
	identifier;

	/**
	 * http://purl.org/ctdl/terms/industryType
	 * Type of industry; select from an existing enumeration of such types such as the SIC, NAICS, and ISIC classifications.
	 * @property industryType
	 * @type CredentialAlignmentObject
	 */
	industryType;

	/**
	 * http://purl.org/ctdl/terms/inLanguage
	 * The primary language or languages of the entity, even if it makes use of other languages; e.g., a course offered in English to teach Spanish would have an inLanguage of English, while a credential in Quebec could have an inLanguage of both French and English.
	 * @property inLanguage
	 * @type language
	 */
	inLanguage;

	/**
	 * http://purl.org/ctdl/terms/instructionalProgramType
	 * Type of instructional program; select from an existing enumeration of such types.
	 * @property instructionalProgramType
	 * @type CredentialAlignmentObject
	 */
	instructionalProgramType;

	/**
	 * http://purl.org/ctdl/terms/isAdvancedStandingFor
	 * This credential, assessment, or learning opportunity reduces the time or cost required to earn or complete the referenced credential, assessment, or learning opportunity.
	 * @property isAdvancedStandingFor
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	isAdvancedStandingFor;

	/**
	 * http://purl.org/ctdl/terms/isPreparationFor
	 * This credential, assessment, or learning opportunity provides preparation for the credential, assessment, or learning opportunity being referenced.
	 * @property isPreparationFor
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	isPreparationFor;

	/**
	 * http://purl.org/ctdl/terms/isProctored
	 * Whether or not the assessment is supervised or monitored by an agent.
	 * Such supervision or proctoring includes: (1)  guaranteeing of the identities of the examinees; (2) the conditions of the examination including instructions, time, materials, equipment and completion, and (3) completed without unauthorized assistance.
	 * @property isProctored
	 * @type boolean
	 */
	isProctored;

	/**
	 * http://purl.org/ctdl/terms/isRecommendedFor
	 * It is recommended to earn or complete this credential, assessment, or learning opportunity before attempting to earn or complete the referenced credential, assessment, or learning opportunity.
	 * @property isRecommendedFor
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	isRecommendedFor;

	/**
	 * http://purl.org/ctdl/terms/isRequiredFor
	 * This credential, assessment, or learning opportunity must be earned or completed prior to attempting to earn or complete the referenced credential, assessment, or learning opportunity.
	 * @property isRequiredFor
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	isRequiredFor;

	/**
	 * http://purl.org/ctdl/terms/jurisdiction
	 * Geographic or political region in which the credential is formally applicable or an organization has authority to act.
	 * @property jurisdiction
	 * @type JurisdictionProfile
	 */
	jurisdiction;

	/**
	 * http://purl.org/ctdl/terms/keyword
	 * Keyword or key phrase describing relevant aspects of an entity.
	 * @property keyword
	 * @type langString
	 */
	keyword;

	/**
	 * http://purl.org/ctdl/terms/learningMethodDescription
	 * Description of the methods used to conduct learning.
	 * @property learningMethodDescription
	 * @type langString
	 */
	learningMethodDescription;

	/**
	 * http://purl.org/ctdl/terms/maintenanceProcess
	 * Entity describing the process by which the credential is maintained including review and updating.
	 * Such maintenance does not include renewal of a credential by an individual holder.
	 * @property maintenanceProcess
	 * @type ProcessProfile
	 */
	maintenanceProcess;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/occupationType
	 * Type of occupation; select from an existing enumeration of such types.
	 * @property occupationType
	 * @type CredentialAlignmentObject
	 */
	occupationType;

	/**
	 * http://purl.org/ctdl/terms/offeredBy
	 * Agent that offers the resource.
	 * @property offeredBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	offeredBy;

	/**
	 * http://purl.org/ctdl/terms/offeredIn
	 * Region or political jurisdiction such as a state, province or locale where the credential, learning resource or assessment is offered.
	 * @property offeredIn
	 * @type JurisdictionProfile
	 */
	offeredIn;

	/**
	 * http://purl.org/ctdl/terms/ownedBy
	 * Organization or person with an enforceable claim or legal title to the resource.
	 * Agent includes credentialing organizations, quality assurance organizations and persons. It does not not include credential holders.
	 * @property ownedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	ownedBy;

	/**
	 * http://purl.org/ctdl/terms/preparationFrom
	 * Another credential, learning opportunity or assessment that provides preparation for this credential, learning opportunity or assessment.
	 * @property preparationFrom
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	preparationFrom;

	/**
	 * http://purl.org/ctdl/terms/processStandards
	 * Webpage or online document that describes the criteria, standards, and/or requirements used with a process.
	 * @property processStandards
	 * @type anyURI
	 */
	processStandards;

	/**
	 * http://purl.org/ctdl/terms/processStandardsDescription
	 * Textual description of the criteria, standards, and/or requirements used with a process.
	 * @property processStandardsDescription
	 * @type langString
	 */
	processStandardsDescription;

	/**
	 * http://purl.org/ctdl/terms/recognizedBy
	 * Agent that acknowledges the validity of the credential, learning opportunity of assessment.
	 * @property recognizedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	recognizedBy;

	/**
	 * http://purl.org/ctdl/terms/recognizedIn
	 * Region or political jurisdiction such as a state, province or locale in which the credential, learning resource, or assessment has been publicly recommended, acknowledged or endorsed.
	 * @property recognizedIn
	 * @type JurisdictionProfile
	 */
	recognizedIn;

	/**
	 * http://purl.org/ctdl/terms/recommends
	 * Recommended credential, learning opportunity or assessment.
	 * @property recommends
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	recommends;

	/**
	 * http://purl.org/ctdl/terms/region
	 * Entity that describes the longitude, latitude and other location details of an area.
	 * @property region
	 * @type Place
	 */
	region;

	/**
	 * http://purl.org/ctdl/terms/regulatedBy
	 * Quality assurance organization that enforces the legal requirements of the credential, learning resource or assessment.
	 * @property regulatedBy
	 * @type QACredentialOrganization
	 */
	regulatedBy;

	/**
	 * http://purl.org/ctdl/terms/regulatedIn
	 * Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or resource is regulated.
	 * @property regulatedIn
	 * @type JurisdictionProfile
	 */
	regulatedIn;

	/**
	 * http://purl.org/ctdl/terms/requires
	 * Requirement or set of requirements for this credential, learning opportunity, or assessment.
	 * @property requires
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	requires;

	/**
	 * http://purl.org/ctdl/terms/sameAs
	 * Another source of information about the entity being described.
	 * Other sources may include descriptions of entities in open databases such as DBpedia, Wikidata, the Credential Engine Registry, or other platforms.
	 * @property sameAs
	 * @type anyURI
	 */
	sameAs;

	/**
	 * http://purl.org/ctdl/terms/scoringMethodDescription
	 * Textual description of the method used to score the assessment.
	 * @property scoringMethodDescription
	 * @type langString
	 */
	scoringMethodDescription;

	/**
	 * http://purl.org/ctdl/terms/scoringMethodExample
	 * Webpage or online document providing an example of the method or tool used to score the assessment.
	 * @property scoringMethodExample
	 * @type anyURI
	 */
	scoringMethodExample;

	/**
	 * http://purl.org/ctdl/terms/scoringMethodExampleDescription
	 * Textual example of the method or tool used to score the assessment.
	 * @property scoringMethodExampleDescription
	 * @type langString
	 */
	scoringMethodExampleDescription;

	/**
	 * http://purl.org/ctdl/terms/scoringMethodType
	 * Type of method used to score the assessment; select from an existing enumeration of such types.
	 * @property scoringMethodType
	 * @type CredentialAlignmentObject
	 */
	scoringMethodType;

	/**
	 * http://purl.org/ctdl/terms/subject
	 * Words or brief phrases describing the topicality of the entity; select subject terms from an existing enumeration of such terms.
	 * @property subject
	 * @type CredentialAlignmentObject
	 */
	subject;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

	/**
	 * http://purl.org/ctdl/terms/targetAssessment
	 * Assessment that provides direct, indirect, formative or summative evaluation or estimation of the nature, ability, or quality for an entity.
	 * @property targetAssessment
	 * @type Assessment | AssessmentProfile
	 */
	targetAssessment;

	/**
	 * http://purl.org/ctdl/terms/targetLearningResource
	 * Learning object or resource that is used as part of an learning activity.
	 * Examples include a textbook or lesson plan that describes or records the educational activity (e.g. an audio- or video-recording of a lesson).
	 * @property targetLearningResource
	 * @type LearningResource
	 */
	targetLearningResource;

	/**
	 * http://purl.org/ctdl/terms/targetPathway
	 * Pathway in which this resource is a potential component.
	 * @property targetPathway
	 * @type Pathway
	 */
	targetPathway;

	/**
	 * http://purl.org/ctdl/terms/versionIdentifier
	 * Alphanumeric identifier of the version of the credential that is unique within the organizational context of its owner.
	 * The credential version captured here is any local identifier used by the credential owner to identify the version of the credential in the its local system.
	 * @property versionIdentifier
	 * @type IdentifierValue
	 */
	versionIdentifier;

}