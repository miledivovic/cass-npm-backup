/**
 *  credentialengine.org/MicroCredential
 *  Credential that addresses a subset of field-specific knowledge, skills, or competencies; often developmental with relationships to other micro-credentials and field credentials.
 *  @author credentialengine.org
 *  @class MicroCredential
 *  @module org.credentialengine
 *  @extends Credential
 */
var MicroCredential = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    Credential.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "MicroCredential";
};
MicroCredential = stjs.extend(MicroCredential, Credential, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/accreditedBy
     *  Quality assurance organization that provides official authorization to, or approval of, a credential, organization, assessment, or learning opportunity.
     *  @property accreditedBy
     *  @type QACredentialOrganization
     */
    prototype.accreditedBy = null;
    /**
     *  http://purl.org/ctdl/terms/accreditedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or assessment is accredited.
     *  @property accreditedIn
     *  @type JurisdictionProfile
     */
    prototype.accreditedIn = null;
    /**
     *  http://purl.org/ctdl/terms/administrationProcess
     *  Entity describing the process by which a credential, assessment, organization, or aspects of it, are administered.
     *  Processes described include the execution of events and the development of resources in the lifecycle of a credential or organization, such as the process for the proctoring of assessments.
     *  @property administrationProcess
     *  @type ProcessProfile
     */
    prototype.administrationProcess = null;
    /**
     *  http://purl.org/ctdl/terms/advancedStandingFrom
     *  Credential that has its time or cost reduced by another credential, assessment or learning opportunity.
     *  @property advancedStandingFrom
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.advancedStandingFrom = null;
    /**
     *  http://purl.org/ctdl/terms/alternateName
     *  Alias for the entity including acronyms, alpha-numeric notations, and other forms of name abbreviations in common use such as PhD, MA, and BA.
     *  @property alternateName
     *  @type langString
     */
    prototype.alternateName = null;
    /**
     *  http://purl.org/ctdl/terms/appealProcess
     *  Formal process for objecting to decisions of the organization regarding credentials, assessments or processes.
     *  @property appealProcess
     *  @type ProcessProfile
     */
    prototype.appealProcess = null;
    /**
     *  http://purl.org/ctdl/terms/approvedBy
     *  Organization that pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
     *  @property approvedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.approvedBy = null;
    /**
     *  http://purl.org/ctdl/terms/approvedIn
     *  Region or political jurisdiction such as a state, province or locale in which an organization pronounces favorable judgment for this credential, assessment, learning opportunity, or organization.
     *  @property approvedIn
     *  @type JurisdictionProfile
     */
    prototype.approvedIn = null;
    /**
     *  http://purl.org/ctdl/terms/assessmentDeliveryType
     *  Delivery type for the assessment for the credential.
     *  Indicates the delivery type for the assessment for the credential.
     *  @property assessmentDeliveryType
     *  @type CredentialAlignmentObject
     */
    prototype.assessmentDeliveryType = null;
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
     *  http://purl.org/ctdl/terms/broadAlignment
     *  Item that covers all of the relevant concepts in the item being described as well as additional relevant concepts.
     *  @property broadAlignment
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.broadAlignment = null;
    /**
     *  http://purl.org/ctdl/terms/codedNotation
     *  Set of alpha-numeric symbols that uniquely identifies an item and supports its discovery and use.
     *  Examples include the alpha-numeric code "CCSS.MATH.CONTENT.HSA.CED.A.2" identifying a node in the U.S. Common Core State Standards on creating equations in algebra, or, the code "8021" in the U.S. Standard Industrial Classification (SIC) for identifying the occupational context for "Offices and Clinics of Dentists".
     *  @property codedNotation
     *  @type string
     */
    prototype.codedNotation = null;
    /**
     *  http://purl.org/ctdl/terms/commonConditions
     *  Set constraints, prerequisites, entry conditions, or requirements that are shared across an organization, organizational subdivision, set of credentials, or category of entities and activities.
     *  @property commonConditions
     *  @type ConditionManifest
     */
    prototype.commonConditions = null;
    /**
     *  http://purl.org/ctdl/terms/commonCosts
     *  Set of costs maintained at an organizational or sub-organizational level, which apply to this credential, assessment, or learning opportunity.
     *  @property commonCosts
     *  @type CostManifest
     */
    prototype.commonCosts = null;
    /**
     *  http://purl.org/ctdl/terms/complaintProcess
     *  Process for handling complaints about a credential, or aspects of it including related learning opportunities and assessments.
     *  @property complaintProcess
     *  @type ProcessProfile
     */
    prototype.complaintProcess = null;
    /**
     *  http://purl.org/ctdl/terms/copyrightHolder
     *  Person or organization holding the rights in copyright to entities such as credentials, learning opportunities, assessments, competencies or concept schemes.
     *  @property copyrightHolder
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.copyrightHolder = null;
    /**
     *  http://purl.org/ctdl/terms/corequisite
     *  Credentials that must be pursued concurrently.
     *  Includes dual (double) degrees that cannot be earned independently of each other.
     *  @property corequisite
     *  @type ConditionProfile
     */
    prototype.corequisite = null;
    /**
     *  http://purl.org/ctdl/terms/credentialId
     *  Globally unique identifier by which the creator, owner or provider of a credential recognizes that credential in transactions with the external environment (e.g., in verifiable claims involving the credential).
     *  The  identifier may take the form of a URN, UUID, ARK, DOI, INFO or any other publicly recognized, globally unique identifier scheme.
     *  @property credentialId
     *  @type string
     */
    prototype.credentialId = null;
    /**
     *  http://purl.org/ctdl/terms/credentialStatusType
     *  Type of official status of the credential; select from an enumeration of such types.
     *  @property credentialStatusType
     *  @type CredentialAlignmentObject
     */
    prototype.credentialStatusType = null;
    /**
     *  http://purl.org/ctdl/terms/ctid
     *  Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a credential, learning opportunity competency, or assessment recognizes the entity in transactions with the external environment (e.g., in verifiable claims involving a credential).
     *  The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
     *  @property ctid
     *  @type string
     */
    prototype.ctid = null;
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
     *  http://purl.org/ctdl/terms/developmentProcess
     *  Entity describing the process by which a credential, or aspects of it, were created.
     *  @property developmentProcess
     *  @type ProcessProfile
     */
    prototype.developmentProcess = null;
    /**
     *  http://purl.org/ctdl/terms/earnings
     *  Entity describing aggregate credential holder earnings data.
     *  @property earnings
     *  @type EarningsProfile
     */
    prototype.earnings = null;
    /**
     *  http://purl.org/ctdl/terms/employmentOutcome
     *  Entity describing aggregate data on jobs obtained with the credential by occupation and industry for a given period of time in a specific region.
     *  @property employmentOutcome
     *  @type EmploymentOutcomeProfile
     */
    prototype.employmentOutcome = null;
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
     *  http://purl.org/ctdl/terms/exactAlignment
     *  Relevant concepts in two entities being compared are coextensive.
     *  @property exactAlignment
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.exactAlignment = null;
    /**
     *  http://purl.org/ctdl/terms/financialAssistance
     *  Entity that describes financial assistance for which this credential, assessment, or learning opportunity qualifies.
     *  Whether the financial aid in question is associated with a credential, an assessment, or a learning opportunity is dependent on context.
     *  @property financialAssistance
     *  @type FinancialAssistanceProfile
     */
    prototype.financialAssistance = null;
    /**
     *  http://purl.org/ctdl/terms/hasPart
     *  Indicates a separately identifiable and independently useful component of the entity.
     *  Such partitive components can frequently be used in more than one context.
     *  @property hasPart
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.hasPart = null;
    /**
     *  http://purl.org/ctdl/terms/holders
     *  Entity describing the number and characteristics of credentialed individuals and their geographic location.
     *  @property holders
     *  @type HoldersProfile
     */
    prototype.holders = null;
    /**
     *  http://purl.org/ctdl/terms/image
     *  Image, icon or logo that represents the entity including registered trade or service marks.
     *  @property image
     *  @type anyURI
     */
    prototype.image = null;
    /**
     *  http://purl.org/ctdl/terms/industryType
     *  Type of industry; select from an existing enumeration of such types such as the SIC, NAICS, and ISIC classifications.
     *  @property industryType
     *  @type CredentialAlignmentObject
     */
    prototype.industryType = null;
    /**
     *  http://purl.org/ctdl/terms/inLanguage
     *  The primary language or languages of the entity, even if it makes use of other languages; e.g., a course offered in English to teach Spanish would have an inLanguage of English, while a credential in Quebec could have an inLanguage of both French and English.
     *  @property inLanguage
     *  @type language
     */
    prototype.inLanguage = null;
    /**
     *  http://purl.org/ctdl/terms/instructionalProgramType
     *  Type of instructional program; select from an existing enumeration of such types.
     *  @property instructionalProgramType
     *  @type CredentialAlignmentObject
     */
    prototype.instructionalProgramType = null;
    /**
     *  http://purl.org/ctdl/terms/isAdvancedStandingFor
     *  This credential, assessment, or learning opportunity reduces the time or cost required to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isAdvancedStandingFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isAdvancedStandingFor = null;
    /**
     *  http://purl.org/ctdl/terms/isPartOf
     *  Indicates another entity of which this entity is a component.
     *  Covers partitive notions such as "embedded".
     *  @property isPartOf
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isPartOf = null;
    /**
     *  http://purl.org/ctdl/terms/isPreparationFor
     *  This credential, assessment, or learning opportunity provides preparation for the credential, assessment, or learning opportunity being referenced.
     *  @property isPreparationFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isPreparationFor = null;
    /**
     *  http://purl.org/ctdl/terms/isRecommendedFor
     *  It is recommended to earn or complete this credential, assessment, or learning opportunity before attempting to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isRecommendedFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isRecommendedFor = null;
    /**
     *  http://purl.org/ctdl/terms/isRequiredFor
     *  This credential, assessment, or learning opportunity must be earned or completed prior to attempting to earn or complete the referenced credential, assessment, or learning opportunity.
     *  @property isRequiredFor
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.isRequiredFor = null;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
    /**
     *  http://purl.org/ctdl/terms/keyword
     *  Keyword or key phrase describing relevant aspects of an entity.
     *  @property keyword
     *  @type langString
     */
    prototype.keyword = null;
    /**
     *  http://purl.org/ctdl/terms/latestVersion
     *  Latest version of the credential.
     *  @property latestVersion
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.latestVersion = null;
    /**
     *  http://purl.org/ctdl/terms/learningDeliveryType
     *  Delivery type for the learning opportunity for the credential.
     *  Indicates the delivery type for the learning opportunity for the credential.
     *  @property learningDeliveryType
     *  @type CredentialAlignmentObject
     */
    prototype.learningDeliveryType = null;
    /**
     *  http://purl.org/ctdl/terms/maintenanceProcess
     *  Entity describing the process by which the credential is maintained including review and updating.
     *  Such maintenance does not include renewal of a credential by an individual holder.
     *  @property maintenanceProcess
     *  @type ProcessProfile
     */
    prototype.maintenanceProcess = null;
    /**
     *  http://purl.org/ctdl/terms/majorAlignment
     *  Major overlap of relevant concepts between the two resources being compared.
     *  @property majorAlignment
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.majorAlignment = null;
    /**
     *  http://purl.org/ctdl/terms/minorAlignment
     *  Minor overlap of relevant concepts between the two credentials being compared.
     *  @property minorAlignment
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.minorAlignment = null;
    /**
     *  http://purl.org/ctdl/terms/naics
     *  North American Industry Classification System (NAICS) code of an organization or business person.
     *  @property naics
     *  @type string
     */
    prototype.naics = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/narrowAlignment
     *  Credential covers all of the relevant concepts in another credential as well as relevant concepts not found in the other credential.
     *  @property narrowAlignment
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.narrowAlignment = null;
    /**
     *  http://purl.org/ctdl/terms/occupationType
     *  Type of occupation; select from an existing enumeration of such types.
     *  @property occupationType
     *  @type CredentialAlignmentObject
     */
    prototype.occupationType = null;
    /**
     *  http://purl.org/ctdl/terms/offeredBy
     *  Agent that offers the credential, learning opportunity or assessment.
     *  @property offeredBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.offeredBy = null;
    /**
     *  http://purl.org/ctdl/terms/offeredIn
     *  Region or political jurisdiction such as a state, province or locale where the credential, learning resource or assessment is offered.
     *  @property offeredIn
     *  @type JurisdictionProfile
     */
    prototype.offeredIn = null;
    /**
     *  http://purl.org/ctdl/terms/ownedBy
     *  Organization or person with an enforceable claim or legal title to the credential, assessment or learning opportunity.
     *  Agent includes credentialing organizations, quality assurance organizations and persons. It does not not include credential holders.
     *  @property ownedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.ownedBy = null;
    /**
     *  http://purl.org/ctdl/terms/preparationFrom
     *  Another credential, learning opportunity or assessment that provides preparation for this credential, learning opportunity or assessment.
     *  @property preparationFrom
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | ConditionProfile | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.preparationFrom = null;
    /**
     *  http://purl.org/ctdl/terms/previousVersion
     *  Version of the credential that immediately precedes this credential.
     *  @property previousVersion
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.previousVersion = null;
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
     *  http://purl.org/ctdl/terms/purposeType
     *  Type of intended application of the credential by the holder; select from an existing enumeration of such types.
     *  @property purposeType
     *  @type CredentialAlignmentObject
     */
    prototype.purposeType = null;
    /**
     *  http://purl.org/ctdl/terms/recognizedBy
     *  Agent that acknowledges the validity of the credential, learning opportunity of assessment.
     *  @property recognizedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.recognizedBy = null;
    /**
     *  http://purl.org/ctdl/terms/recognizedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning resource, or assessment has been publicly recommended, acknowledged or endorsed.
     *  @property recognizedIn
     *  @type JurisdictionProfile
     */
    prototype.recognizedIn = null;
    /**
     *  http://purl.org/ctdl/terms/recommends
     *  Recommended credential, learning opportunity or assessment.
     *  @property recommends
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.recommends = null;
    /**
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/regulatedBy
     *  Quality assurance organization that enforces the legal requirements of the credential, learning resource or assessment.
     *  @property regulatedBy
     *  @type QACredentialOrganization
     */
    prototype.regulatedBy = null;
    /**
     *  http://purl.org/ctdl/terms/regulatedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential, learning opportunity or resource is regulated.
     *  @property regulatedIn
     *  @type JurisdictionProfile
     */
    prototype.regulatedIn = null;
    /**
     *  http://purl.org/ctdl/terms/relatedAction
     *  Action related to the credential.
     *  @property relatedAction
     *  @type AccreditAction | AdvancedStandingAction | ApproveAction | CredentialingAction | OfferAction | RecognizeAction | RegulateAction | RenewAction | RevokeAction | RightsAction
     */
    prototype.relatedAction = null;
    /**
     *  http://purl.org/ctdl/terms/renewal
     *  Entity describing the constraints, prerequisites, entry conditions, or requirements necessary to maintenance and renewal of an awarded credential.
     *  Generally, renewal applies to certifications and licenses; however, it may occasionally apply to other types of credentials.
     *  @property renewal
     *  @type ConditionProfile
     */
    prototype.renewal = null;
    /**
     *  http://purl.org/ctdl/terms/renewalFrequency
     *  Frequency with which the credential needs to be renewed.
     *  @property renewalFrequency
     *  @type duration
     */
    prototype.renewalFrequency = null;
    /**
     *  http://purl.org/ctdl/terms/renewedBy
     *  Organization or person that handles the renewal of the credential.
     *  @property renewedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.renewedBy = null;
    /**
     *  http://purl.org/ctdl/terms/renewedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential is renewable.
     *  @property renewedIn
     *  @type JurisdictionProfile
     */
    prototype.renewedIn = null;
    /**
     *  http://purl.org/ctdl/terms/requires
     *  Requirement or set of requirements for this credential, learning opportunity, or assessment.
     *  @property requires
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.requires = null;
    /**
     *  http://purl.org/ctdl/terms/reviewProcess
     *  Entity that describes the process by which the credential, or aspects of it, are reviewed.
     *  @property reviewProcess
     *  @type ProcessProfile
     */
    prototype.reviewProcess = null;
    /**
     *  http://purl.org/ctdl/terms/revocation
     *  Entity that describes the processes and criteria for ending (revoking) the validity or operation of an awarded credential.
     *  Generally, revocation applies to certifications and licenses; however, it may also apply to other types of credential under extraordinary circumstances.
     *  @property revocation
     *  @type RevocationProfile
     */
    prototype.revocation = null;
    /**
     *  http://purl.org/ctdl/terms/revocationProcess
     *  Entity describing the process by which the credential is revoked.
     *  @property revocationProcess
     *  @type ProcessProfile
     */
    prototype.revocationProcess = null;
    /**
     *  http://purl.org/ctdl/terms/revokedBy
     *  Organization or person that handles revocation of an awarded credential due to violations or failure to renew.
     *  @property revokedBy
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.revokedBy = null;
    /**
     *  http://purl.org/ctdl/terms/revokedIn
     *  Region or political jurisdiction such as a state, province or locale in which the credential can be revoked.
     *  @property revokedIn
     *  @type JurisdictionProfile
     */
    prototype.revokedIn = null;
    /**
     *  http://purl.org/ctdl/terms/subject
     *  Words or brief phrases describing the topicality of the entity; select subject terms from an existing enumeration of such terms.
     *  @property subject
     *  @type CredentialAlignmentObject
     */
    prototype.subject = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/versionIdentifier
     *  Alphanumeric identifier of the version of the credential that is unique within the organizational context of its owner.
     *  The credential version captured here is any local identifier used by the credential owner to identify the version of the credential in the its local system.
     *  @property versionIdentifier
     *  @type IdentifierValue
     */
    prototype.versionIdentifier = null;
}, {accreditedBy: "QACredentialOrganization", accreditedIn: "JurisdictionProfile", administrationProcess: "ProcessProfile", advancedStandingFrom: "Object", appealProcess: "ProcessProfile", approvedBy: "Object", approvedIn: "JurisdictionProfile", assessmentDeliveryType: "CredentialAlignmentObject", audienceLevelType: "CredentialAlignmentObject", audienceType: "CredentialAlignmentObject", availableAt: "Place", broadAlignment: "Object", commonConditions: "ConditionManifest", commonCosts: "CostManifest", complaintProcess: "ProcessProfile", copyrightHolder: "Object", corequisite: "ConditionProfile", credentialStatusType: "CredentialAlignmentObject", developmentProcess: "ProcessProfile", earnings: "EarningsProfile", employmentOutcome: "EmploymentOutcomeProfile", estimatedCost: "CostProfile", estimatedDuration: "DurationProfile", exactAlignment: "Object", financialAssistance: "FinancialAssistanceProfile", hasPart: "Object", holders: "HoldersProfile", industryType: "CredentialAlignmentObject", instructionalProgramType: "CredentialAlignmentObject", isAdvancedStandingFor: "Object", isPartOf: "Object", isPreparationFor: "Object", isRecommendedFor: "Object", isRequiredFor: "Object", jurisdiction: "JurisdictionProfile", latestVersion: "Object", learningDeliveryType: "CredentialAlignmentObject", maintenanceProcess: "ProcessProfile", majorAlignment: "Object", minorAlignment: "Object", narrowAlignment: "Object", occupationType: "CredentialAlignmentObject", offeredBy: "Object", offeredIn: "JurisdictionProfile", ownedBy: "Object", preparationFrom: "Object", previousVersion: "Object", purposeType: "CredentialAlignmentObject", recognizedBy: "Object", recognizedIn: "JurisdictionProfile", recommends: "Object", region: "Place", regulatedBy: "QACredentialOrganization", regulatedIn: "JurisdictionProfile", relatedAction: "Object", renewal: "ConditionProfile", renewedBy: "Object", renewedIn: "JurisdictionProfile", requires: "Object", reviewProcess: "ProcessProfile", revocation: "RevocationProfile", revocationProcess: "ProcessProfile", revokedBy: "Object", revokedIn: "JurisdictionProfile", subject: "CredentialAlignmentObject", versionIdentifier: "IdentifierValue", accreditedBy: "QACredentialOrganization", accreditedIn: "JurisdictionProfile", administrationProcess: "ProcessProfile", advancedStandingFrom: "Object", appealProcess: "ProcessProfile", approvedBy: "Object", approvedIn: "JurisdictionProfile", assessmentDeliveryType: "CredentialAlignmentObject", audienceLevelType: "CredentialAlignmentObject", audienceType: "CredentialAlignmentObject", availableAt: "Place", broadAlignment: "Object", commonConditions: "ConditionManifest", commonCosts: "CostManifest", complaintProcess: "ProcessProfile", copyrightHolder: "Object", corequisite: "ConditionProfile", credentialStatusType: "CredentialAlignmentObject", developmentProcess: "ProcessProfile", earnings: "EarningsProfile", employmentOutcome: "EmploymentOutcomeProfile", estimatedCost: "CostProfile", estimatedDuration: "DurationProfile", exactAlignment: "Object", financialAssistance: "FinancialAssistanceProfile", hasPart: "Object", holders: "HoldersProfile", industryType: "CredentialAlignmentObject", instructionalProgramType: "CredentialAlignmentObject", isAdvancedStandingFor: "Object", isPartOf: "Object", isPreparationFor: "Object", isRecommendedFor: "Object", isRequiredFor: "Object", jurisdiction: "JurisdictionProfile", latestVersion: "Object", learningDeliveryType: "CredentialAlignmentObject", maintenanceProcess: "ProcessProfile", majorAlignment: "Object", minorAlignment: "Object", narrowAlignment: "Object", occupationType: "CredentialAlignmentObject", offeredBy: "Object", offeredIn: "JurisdictionProfile", ownedBy: "Object", preparationFrom: "Object", previousVersion: "Object", purposeType: "CredentialAlignmentObject", recognizedBy: "Object", recognizedIn: "JurisdictionProfile", recommends: "Object", region: "Place", regulatedBy: "QACredentialOrganization", regulatedIn: "JurisdictionProfile", relatedAction: "Object", renewal: "ConditionProfile", renewedBy: "Object", renewedIn: "JurisdictionProfile", requires: "Object", reviewProcess: "ProcessProfile", revocation: "RevocationProfile", revocationProcess: "ProcessProfile", revokedBy: "Object", revokedIn: "JurisdictionProfile", subject: "CredentialAlignmentObject", versionIdentifier: "IdentifierValue", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
