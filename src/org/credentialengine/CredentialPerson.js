/**
 * credentialengine.org/CredentialPerson
 * Person who plays a role as primary agent in a credentialing action.
 * The ceterms:CredentialPerson class should be used to describe persons directly engaged as primary agent in credentialing actions such as approving, offering, recognizing, renewing and revoking credentials and should not include persons merely affiliated with, or employed by organizations that perform such actions.
 * @author credentialengine.org
 * @class CredentialPerson
 * @module org.credentialengine
 * @extends Agent
 */
module.exports = class CredentialPerson extends ce.Agent
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","CredentialPerson");
	}

	/**
	 * http://purl.org/ctdl/terms/affiliation
	 * Organization to which a person is formally related through work, sudy, or social engagement.
	 * @property affiliation
	 * @type CredentialOrganization | QACredentialOrganization
	 */
	affiliation;

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
	 * http://purl.org/ctdl/terms/approves
	 * Credential, assessment, learning opportunity, or organization for which this organization pronounces favorable judgment.
	 * @property approves
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | CompetencyFramework | Credential | CredentialOrganization | CredentialPerson | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QACredentialOrganization | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	approves;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/email
	 * Email address of the organization or person.
	 * @property email
	 * @type string
	 */
	email;

	/**
	 * http://purl.org/ctdl/terms/familyName
	 * Family name such as the last name of a person in the U.S..
	 * The ceterms:familyName property can be used along with givenName instead of the ceterms:name property.
	 * @property familyName
	 * @type langString
	 */
	familyName;

	/**
	 * http://purl.org/ctdl/terms/givenName
	 * First name of a person.
	 * @property givenName
	 * @type langString
	 */
	givenName;

	/**
	 * http://purl.org/ctdl/terms/honorificSuffix
	 * Honorific suffix preceding a person's name such as M.D. , PhD, or MSCSW.
	 * @property honorificSuffix
	 * @type langString
	 */
	honorificSuffix;

	/**
	 * http://purl.org/ctdl/terms/image
	 * Image, icon or logo that represents the entity including registered trade or service marks.
	 * @property image
	 * @type anyURI
	 */
	image;

	/**
	 * http://purl.org/ctdl/terms/keyword
	 * Keyword or key phrase describing relevant aspects of an entity.
	 * @property keyword
	 * @type langString
	 */
	keyword;

	/**
	 * http://purl.org/ctdl/terms/offers
	 * Resource offered or conferred by the organization or person.
	 * @property offers
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | Job | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | Pathway | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	offers;

	/**
	 * http://purl.org/ctdl/terms/owns
	 * Resource over which the organization or person claims legal title.
	 * Generally, the value of the property should be one of the subclasses of ceterms:Credential or ceterms:Pathway.
	 * @property owns
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | Pathway | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma | TransferValueProfile
	 */
	owns;

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
	 * http://purl.org/ctdl/terms/recognizes
	 * Resource that the agent recommends, endorses, indicates preference for, or otherwise provides a positive judgment.
	 * @property recognizes
	 * @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | CompetencyFramework | Credential | CredentialOrganization | CredentialPerson | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QACredentialOrganization | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma | TransferValueProfile
	 */
	recognizes;

	/**
	 * http://purl.org/ctdl/terms/renews
	 * Credential type that has its validity extended by the organization or person.
	 * The value of ceterms:renews should be one of the specific subclasses of ceterms:Credential.
	 * @property renews
	 * @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	renews;

	/**
	 * http://purl.org/ctdl/terms/revokes
	 * Credential type that can be invalidated or retracted by the awarding agent.
	 * The value of ceterms:revokes should be one of the specific subclasses of ceterms:Credential.
	 * @property revokes
	 * @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | CertificateOfCompletion | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
	 */
	revokes;

	/**
	 * http://purl.org/ctdl/terms/sameAs
	 * Another source of information about the entity being described.
	 * Other sources may include descriptions of entities in open databases such as DBpedia, Wikidata, the Credential Engine Registry, or other platforms.
	 * @property sameAs
	 * @type anyURI
	 */
	sameAs;

	/**
	 * http://purl.org/ctdl/terms/serviceType
	 * Type of service offered by the agent being described; select from an existing enumeration of such terms.
	 * @property serviceType
	 * @type CredentialAlignmentObject
	 */
	serviceType;

	/**
	 * http://purl.org/ctdl/terms/socialMedia
	 * Social media access point for an agent or an agent's contact point.
	 * @property socialMedia
	 * @type anyURI
	 */
	socialMedia;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

	/**
	 * http://purl.org/ctdl/terms/targetContactPoint
	 * Options for contacting the organization or person.
	 * @property targetContactPoint
	 * @type ContactPoint
	 */
	targetContactPoint;

	/**
	 * http://purl.org/ctdl/terms/worksFor
	 * Person's place of employment.
	 * @property worksFor
	 * @type CredentialOrganization | QACredentialOrganization
	 */
	worksFor;

}