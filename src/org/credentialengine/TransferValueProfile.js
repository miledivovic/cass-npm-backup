/**
 * credentialengine.org/TransferValueProfile
 * Description of transfer value of a resource.
 * @author credentialengine.org
 * @class TransferValueProfile
 * @module org.credentialengine
 */
module.exports = class TransferValueProfile extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","TransferValueProfile");
	}

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
	 * http://purl.org/ctdl/terms/developmentProcess
	 * Entity describing the process by which a credential, or aspects of it, were created.
	 * @property developmentProcess
	 * @type ProcessProfile
	 */
	developmentProcess;

	/**
	 * http://purl.org/ctdl/terms/endDate
	 * Date some event or activity ends.
	 * @property endDate
	 * @type date
	 */
	endDate;

	/**
	 * http://purl.org/ctdl/terms/identifier
	 * Alphanumeric token that identifies this resource and information about the token's originating context or scheme.
	 * @property identifier
	 * @type IdentifierValue
	 */
	identifier;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/ownedBy
	 * Organization or person with an enforceable claim or legal title to the resource.
	 * Agent includes credentialing organizations, quality assurance organizations and persons. It does not not include credential holders.
	 * @property ownedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	ownedBy;

	/**
	 * http://purl.org/ctdl/terms/startDate
	 * Date the validity or usefulness of the information in this resource begins.
	 * @property startDate
	 * @type date
	 */
	startDate;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

	/**
	 * http://purl.org/ctdl/terms/transferValue
	 * An explicit amount of transfer value.
	 * @property transferValue
	 * @type ValueProfile
	 */
	transferValue;

	/**
	 * http://purl.org/ctdl/terms/transferValueFor
	 * Resource for which the described transfer value is applicable.
	 * @property transferValueFor
	 * @type Competency | ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | Job | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | Occupation | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	transferValueFor;

	/**
	 * http://purl.org/ctdl/terms/transferValueFrom
	 * Resource from which the described transfer value originates.
	 * @property transferValueFrom
	 * @type Competency | ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | Job | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | Occupation | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	transferValueFrom;

}