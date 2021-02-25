/**
 *  credentialengine.org/VerificationServiceProfile
 *  Entity describing the means by which someone can verify whether a credential has been attained.
 *  Includes, but is not limited to, verification of whether quality assurance credentials have been issued for organizations, learning opportunities, and assessments.
 *  @author credentialengine.org
 *  @class VerificationServiceProfile
 *  @module org.credentialengine
 *  @extends Intangible
 */
var VerificationServiceProfile = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "VerificationServiceProfile";
};
VerificationServiceProfile = stjs.extend(VerificationServiceProfile, Intangible, [], function(constructor, prototype) {
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
     *  http://purl.org/ctdl/terms/holderMustAuthorize
     *  Whether or not the credential holder must authorize the organization to provide the verification service.
     *  @property holderMustAuthorize
     *  @type boolean
     */
    prototype.holderMustAuthorize = false;
    /**
     *  http://purl.org/ctdl/terms/jurisdiction
     *  Geographic or political region in which the credential is formally applicable or an organization has authority to act.
     *  @property jurisdiction
     *  @type JurisdictionProfile
     */
    prototype.jurisdiction = null;
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
     *  http://purl.org/ctdl/terms/region
     *  Entity that describes the longitude, latitude and other location details of an area.
     *  @property region
     *  @type Place
     */
    prototype.region = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/targetCredential
     *  Credential that is a focus or target of the condition, process or verification service.
     *  @property targetCredential
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.targetCredential = null;
    /**
     *  http://purl.org/ctdl/terms/verificationDirectory
     *  Directory of credential holders and their current statuses.
     *  @property verificationDirectory
     *  @type anyURI
     */
    prototype.verificationDirectory = null;
    /**
     *  http://purl.org/ctdl/terms/verificationMethodDescription
     *  Textual description of the methods used to evaluate an assessment, learning opportunity, process or verificaiton service for validity or reliability.
     *  @property verificationMethodDescription
     *  @type langString
     */
    prototype.verificationMethodDescription = null;
    /**
     *  http://purl.org/ctdl/terms/verificationService
     *  Direct access to the verification service.
     *  This property identifies machine-accessible services, such as API endpoints, that provide direct access to the verification service being described.
     *  @property verificationService
     *  @type anyURI
     */
    prototype.verificationService = null;
    /**
     *  http://purl.org/ctdl/terms/verifiedClaimType
     *  Type of claim provided through a verification service; select from an existing enumeration of such types.
     *  @property verifiedClaimType
     *  @type CredentialAlignmentObject
     */
    prototype.verifiedClaimType = null;
}, {estimatedCost: "CostProfile", jurisdiction: "JurisdictionProfile", offeredBy: "Object", offeredIn: "JurisdictionProfile", region: "Place", targetCredential: "Object", verifiedClaimType: "CredentialAlignmentObject", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
