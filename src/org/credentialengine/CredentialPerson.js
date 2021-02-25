/**
 *  credentialengine.org/CredentialPerson
 *  Person who plays a role as primary agent in a credentialing action.
 *  The ceterms:CredentialPerson class should be used to describe persons directly engaged as primary agent in credentialing actions such as approving, offering, recognizing, renewing and revoking credentials and should not include persons merely affiliated with, or employed by organizations that perform such actions.
 *  @author credentialengine.org
 *  @class CredentialPerson
 *  @module org.credentialengine
 *  @extends Agent
 */
var CredentialPerson = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    Agent.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "CredentialPerson";
};
CredentialPerson = stjs.extend(CredentialPerson, Agent, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/affiliation
     *  Organization to which a person is formally related through work, sudy, or social engagement.
     *  @property affiliation
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.affiliation = null;
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
     *  http://purl.org/ctdl/terms/approves
     *  Credential, assessment, learning opportunity, or organization for which this organization pronounces favorable judgment.
     *  @property approves
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | CompetencyFramework | Credential | CredentialOrganization | CredentialPerson | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QACredentialOrganization | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.approves = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/email
     *  Email address of the organization or person.
     *  @property email
     *  @type string
     */
    prototype.email = null;
    /**
     *  http://purl.org/ctdl/terms/familyName
     *  Family name such as the last name of a person in the U.S..
     *  The ceterms:familyName property can be used along with givenName instead of the ceterms:name property.
     *  @property familyName
     *  @type langString
     */
    prototype.familyName = null;
    /**
     *  http://purl.org/ctdl/terms/givenName
     *  First name of a person.
     *  @property givenName
     *  @type langString
     */
    prototype.givenName = null;
    /**
     *  http://purl.org/ctdl/terms/honorificSuffix
     *  Honorific suffix preceding a person's name such as M.D. , PhD, or MSCSW.
     *  @property honorificSuffix
     *  @type langString
     */
    prototype.honorificSuffix = null;
    /**
     *  http://purl.org/ctdl/terms/image
     *  Image, icon or logo that represents the entity including registered trade or service marks.
     *  @property image
     *  @type anyURI
     */
    prototype.image = null;
    /**
     *  http://purl.org/ctdl/terms/keyword
     *  Keyword or key phrase describing relevant aspects of an entity.
     *  @property keyword
     *  @type langString
     */
    prototype.keyword = null;
    /**
     *  http://purl.org/ctdl/terms/offers
     *  Credential, learning opportunity or assessment offered or conferred by the organization or person.
     *  @property offers
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.offers = null;
    /**
     *  http://purl.org/ctdl/terms/owns
     *  Credential, learning opportunity or assessment over which the organization or person claims legal title.
     *  Generally, the value of the property should be one of the subclasses of ceterms:Credential.
     *  @property owns
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.owns = null;
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
     *  http://purl.org/ctdl/terms/recognizes
     *  Credential, learning opportunity or assessment that the agent recommends, endorses, indicates preference for, or otherwise provides a positive judgment.
     *  @property recognizes
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | CompetencyFramework | Credential | CredentialOrganization | CredentialPerson | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QACredentialOrganization | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.recognizes = null;
    /**
     *  http://purl.org/ctdl/terms/renews
     *  Credential type that has its validity extended by the organization or person.
     *  The value of ceterms:renews should be one of the specific subclasses of ceterms:Credential.
     *  @property renews
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.renews = null;
    /**
     *  http://purl.org/ctdl/terms/revokes
     *  Credential type that can be invalidated or retracted by the awarding agent.
     *  The value of ceterms:revokes should be one of the specific subclasses of ceterms:Credential.
     *  @property revokes
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.revokes = null;
    /**
     *  http://purl.org/ctdl/terms/sameAs
     *  Another entity that unambiguously indicates the identity of the entity being described.
     *  Entities that may indicate identity include, but are not limited to, descriptions of entities in open databases such as DBpedia and Wikidata or social media accounts such as FaceBook and LinkedIn.
     *  @property sameAs
     *  @type anyURI
     */
    prototype.sameAs = null;
    /**
     *  http://purl.org/ctdl/terms/serviceType
     *  Type of service offered by the agent being described; select from an existing enumeration of such terms.
     *  @property serviceType
     *  @type CredentialAlignmentObject
     */
    prototype.serviceType = null;
    /**
     *  http://purl.org/ctdl/terms/socialMedia
     *  Social media access point for an agent or an agent's contact point.
     *  @property socialMedia
     *  @type anyURI
     */
    prototype.socialMedia = null;
    /**
     *  http://purl.org/ctdl/terms/subjectWebpage
     *  The webpage that describes this entity.
     *  The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
     *  @property subjectWebpage
     *  @type anyURI
     */
    prototype.subjectWebpage = null;
    /**
     *  http://purl.org/ctdl/terms/targetContactPoint
     *  Options for contacting the organization or person.
     *  @property targetContactPoint
     *  @type ContactPoint
     */
    prototype.targetContactPoint = null;
    /**
     *  http://purl.org/ctdl/terms/worksFor
     *  Person's place of employment.
     *  @property worksFor
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.worksFor = null;
}, {affiliation: "Object", approvedBy: "Object", approvedIn: "JurisdictionProfile", approves: "Object", offers: "Object", owns: "Object", recognizedBy: "Object", recognizedIn: "JurisdictionProfile", recognizes: "Object", renews: "Object", revokes: "Object", serviceType: "CredentialAlignmentObject", targetContactPoint: "ContactPoint", worksFor: "Object", hasAlignmentMap: "AlignmentMap", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
