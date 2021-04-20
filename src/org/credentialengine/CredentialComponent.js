/**
 * credentialengine.org/CredentialComponent
 * Resource that identifies another resource that describes qualification, achievement, personal or organizational quality, or aspect of an identity typically used to indicate suitability.
 * The ceterms:Credential class is broadly defined to encompass credentials used across domains and communities of practice. Subclasses of ceterms:Credential as defined by Credential Engine (or other communities) should be referenced.
 * @author credentialengine.org
 * @class CredentialComponent
 * @module org.credentialengine
 * @extends PathwayComponent
 */
module.exports = class CredentialComponent extends ce.PathwayComponent
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","CredentialComponent");
	}

	/**
	 * http://purl.org/ctdlasn/terms/hasChild
	 * The referenced resource is lower in some arbitrary hierarchy than this resource.
	 * This property identifies a child node in the downward path in the chain of resources in a taxon path.
	 * @property hasChild
	 * @type Competency | AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | SelectionComponent | Task | WorkExperienceComponent
	 */
	hasChild;

	/**
	 * http://purl.org/ctdlasn/terms/isChildOf
	 * The referenced resource is higher in some arbitrary hierarchy than this resource.
	 * @property isChildOf
	 * @type Competency | AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | Pathway | SelectionComponent | Task | WorkExperienceComponent
	 */
	isChildOf;

	/**
	 * http://purl.org/ctdl/terms/componentDesignation
	 * Label identifying the category to further distinguish one component from another as designated by the promulgating body.
	 * Examples may include "Required", "Core", "General Education", "Elective", etc.
	 * @property componentDesignation
	 * @type CredentialAlignmentObject
	 */
	componentDesignation;

	/**
	 * http://purl.org/ctdl/terms/credentialType
	 * Type of credential such as badge, certification, bachelor degree.
	 * A general property for use where a resource needs to identify a specific sub-class of the ceterms:Credential type.
	 * @property credentialType
	 * @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	credentialType;

	/**
	 * http://purl.org/ctdl/terms/ctid
	 * Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a resource recognizes it in transactions with the external environment (e.g., in verifiable claims involving the resource).
	 * The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
	 * @property ctid
	 * @type string
	 */
	ctid;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/hasCondition
	 * Resource referenced defines the conditions by which a rule set is satisfied.
	 * @property hasCondition
	 * @type ComponentCondition
	 */
	hasCondition;

	/**
	 * http://purl.org/ctdl/terms/identifier
	 * Alphanumeric token that identifies this resource and information about the token's originating context or scheme.
	 * @property identifier
	 * @type IdentifierValue
	 */
	identifier;

	/**
	 * http://purl.org/ctdl/terms/isDestinationComponentOf
	 * Pathway for which this resource is the goal or destination.
	 * @property isDestinationComponentOf
	 * @type Pathway
	 */
	isDestinationComponentOf;

	/**
	 * http://purl.org/ctdl/terms/isPartOf
	 * Indicates another entity of which this entity is a component.
	 * Covers partitive notions such as "embedded".
	 * @property isPartOf
	 * @type ApprenticeshipCertificate | AssessmentComponent | AssociateDegree | BachelorDegree | Badge | BasicComponent | Certificate | CertificateOfCompletion | Certification | CocurricularComponent | CompetencyComponent | ComponentCondition | CourseComponent | Credential | CredentialComponent | Degree | DigitalBadge | Diploma | DoctoralDegree | ExtracurricularComponent | GeneralEducationDevelopment | JobComponent | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma | WorkExperienceComponent
	 */
	isPartOf;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/pointValue
	 * Points associated with this resource, or points possible.
	 * @property pointValue
	 * @type QuantitativeValue
	 */
	pointValue;

	/**
	 * http://purl.org/ctdl/terms/precedes
	 * Resource that logically comes after this resource.
	 * The ceterms:precedes property indicates a simple or suggested ordering of resources; if a required ordering is intended, use ceterms:prerequisite instead.
	 * @property precedes
	 * @type AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | SelectionComponent | WorkExperienceComponent
	 */
	precedes;

	/**
	 * http://purl.org/ctdl/terms/prerequisite
	 * Resource that is required as a prior condition to this resource.
	 * @property prerequisite
	 * @type AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | SelectionComponent | WorkExperienceComponent
	 */
	prerequisite;

	/**
	 * http://purl.org/ctdl/terms/sourceData
	 * Structured data representing the resource.
	 * The preferred data serialization is JSON-LD or some other serialization of RDF.
	 * @property sourceData
	 * @type anyURI
	 */
	sourceData;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

}