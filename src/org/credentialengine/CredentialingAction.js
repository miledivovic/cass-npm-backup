/**
 *  credentialengine.org/CredentialingAction
 *  Action taken by an agent affecting the status of an object entity.
 *  Since an instance of ceterms:CredentialingAction is a claim that a certain agent has taken the action being described, creation of such a ceterms:CredentialingAction should be reserved to the agent of that action.
 *  @author credentialengine.org
 *  @class CredentialingAction
 *  @module org.credentialengine
 *  @extends Action
 */
var CredentialingAction = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "CredentialingAction";
};
CredentialingAction = stjs.extend(CredentialingAction, Action, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/actingAgent
     *  Organization or person performing an action.
     *  @property actingAgent
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.actingAgent = null;
    /**
     *  http://purl.org/ctdl/terms/actionStatusType
     *  Entity describing the current disposition or standing of an action; select from an existing enumeration of such types.
     *  @property actionStatusType
     *  @type CredentialAlignmentObject
     */
    prototype.actionStatusType = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/endDate
     *  Date some event or activity ends.
     *  @property endDate
     *  @type date
     */
    prototype.endDate = null;
    /**
     *  http://purl.org/ctdl/terms/evidenceOfAction
     *  Entity that proves that the action occured or that the action continues to be valid.
     *  The evidence verifies the information in the action and is particular to it. It is not a directory of such evidentiary entities or a description of how such verifications might generically be characterized.
     *  @property evidenceOfAction
     *  @type anyURI
     */
    prototype.evidenceOfAction = null;
    /**
     *  http://purl.org/ctdl/terms/instrument
     *  Object that helped the agent perform the action. e.g. John wrote a book with a pen.
     *  A credential or other instrument whose criteria was applied in executing the action.
     *  @property instrument
     *  @type ApprenticeshipCertificate | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Credential | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.instrument = null;
    /**
     *  http://purl.org/ctdl/terms/object
     *  Object upon which the action is carried out, whose state is kept intact or changed.
     *  @property object
     *  @type ApprenticeshipCertificate | AssessmentProfile | AssociateDegree | BachelorDegree | Badge | Certificate | Certification | Competency | CompetencyFramework | Credential | CredentialOrganization | CredentialPerson | Degree | DigitalBadge | Diploma | DoctoralDegree | GeneralEducationDevelopment | JourneymanCertificate | LearningOpportunityProfile | License | MasterCertificate | MasterDegree | MicroCredential | OpenBadge | ProfessionalDoctorate | QACredentialOrganization | QualityAssuranceCredential | ResearchDoctorate | SecondarySchoolDiploma
     */
    prototype.object = null;
    /**
     *  http://purl.org/ctdl/terms/participant
     *  Co-agents that participated in the action indirectly.
     *  @property participant
     *  @type CredentialOrganization | CredentialPerson | QACredentialOrganization
     */
    prototype.participant = null;
    /**
     *  http://purl.org/ctdl/terms/startDate
     *  Date the validity or usefulness of the information in this resource begins.
     *  @property startDate
     *  @type date
     */
    prototype.startDate = null;
}, {actingAgent: "Object", actionStatusType: "CredentialAlignmentObject", instrument: "Object", object: "Object", participant: "Object", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
