/**
 *  credentialengine.org/ConditionManifest
 *  Set of constraints, prerequisites, entry conditions, or requirements maintained at the organizational and/or sub-organizational level.
 *  These conditions are intended to be referenced by external entities such as individual credentials in order to facilitate the process of their description and to reduce unnecessary duplication of data applicable across an array of entities.
 *  @author credentialengine.org
 *  @class ConditionManifest
 *  @module org.credentialengine
 */
var ConditionManifest = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "ConditionManifest");
};
ConditionManifest = stjs.extend(ConditionManifest, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/conditionManifestOf
     *  Organization maintaining the condition manifest.
     *  @property conditionManifestOf
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.conditionManifestOf = null;
    /**
     *  http://purl.org/ctdl/terms/corequisite
     *  Credentials that must be pursued concurrently.
     *  Includes dual (double) degrees that cannot be earned independently of each other.
     *  @property corequisite
     *  @type ConditionProfile
     */
    prototype.corequisite = null;
    /**
     *  http://purl.org/ctdl/terms/ctid
     *  Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a credential, learning opportunity competency, or assessment recognizes the entity in transactions with the external environment (e.g., in verifiable claims involving a credential).
     *  The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
     *  @property ctid
     *  @type string
     */
    prototype.ctid = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/entryCondition
     *  Prerequisites for entry into a credentialing program, a learning opportunity or an assessment including transcripts, records of previous experience, and lower-level learning opportunities.
     *  @property entryCondition
     *  @type ConditionProfile
     */
    prototype.entryCondition = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/recommends
     *  Recommended credential, learning opportunity or assessment.
     *  @property recommends
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.recommends = null;
    /**
     *  http://purl.org/ctdl/terms/renewal
     *  Entity describing the constraints, prerequisites, entry conditions, or requirements necessary to maintenance and renewal of an awarded credential.
     *  Generally, renewal applies to certifications and licenses; however, it may occasionally apply to other types of credentials.
     *  @property renewal
     *  @type ConditionProfile
     */
    prototype.renewal = null;
    /**
     *  http://purl.org/ctdl/terms/requires
     *  Requirement or set of requirements for this credential, learning opportunity, or assessment.
     *  @property requires
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | ConditionProfile | Credential | CredentialAlignmentObject | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.requires = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
}, {conditionManifestOf: "Object", corequisite: "ConditionProfile", entryCondition: "ConditionProfile", recommends: "Object", renewal: "ConditionProfile", requires: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
