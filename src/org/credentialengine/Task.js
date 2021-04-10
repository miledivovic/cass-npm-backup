/**
 * credentialengine.org/Task
 * Specific activity, typically related to performing a function or achieving a goal.
 * @author credentialengine.org
 * @class Task
 * @module org.credentialengine
 */
module.exports = class Task extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","Task");
	}

	/**
	 * http://purl.org/ctdlasn/terms/abilityEmbodied
	 * Enduring attributes of the individual that influence performance are embodied either directly or indirectly in this resource.
	 * @property abilityEmbodied
	 * @type anyURI
	 */
	abilityEmbodied;

	/**
	 * http://purl.org/ctdlasn/terms/comment
	 * Supplemental text provided by the promulgating body that clarifies the nature, scope or use of this resource.
	 * Use this property when the text provides useful context for this resource.
	 * @property comment
	 * @type langString
	 */
	comment;

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
	 * http://purl.org/ctdlasn/terms/knowledgeEmbodied
	 * Body of information embodied either directly or indirectly in this resource.
	 * @property knowledgeEmbodied
	 * @type anyURI
	 */
	knowledgeEmbodied;

	/**
	 * http://purl.org/ctdlasn/terms/listID
	 * An alphanumeric string indicating the relative position of a resource in an ordered list of resources such as "A", "B", or "a", "b", or "I", "II", or "1", "2".
	 * @property listID
	 * @type string
	 */
	listID;

	/**
	 * http://purl.org/ctdlasn/terms/skillEmbodied
	 * Ability to apply knowledge and use know-how to complete tasks and solve problems including types or categories of developed proficiency or dexterity in mental operations and physical processes is embodied either directly or indirectly in this resource.
	 * @property skillEmbodied
	 * @type anyURI
	 */
	skillEmbodied;

	/**
	 * http://purl.org/ctdl/terms/classification
	 * Category or classification of this resource.
	 * @property classification
	 * @type Concept
	 */
	classification;

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
	 * http://purl.org/ctdl/terms/versionIdentifier
	 * Alphanumeric identifier of the version of the credential that is unique within the organizational context of its owner.
	 * The credential version captured here is any local identifier used by the credential owner to identify the version of the credential in the its local system.
	 * @property versionIdentifier
	 * @type IdentifierValue
	 */
	versionIdentifier;

}