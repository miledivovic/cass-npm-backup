/**
 * credentialengine.org/WorkRole
 * Collection of tasks and competencies that embody a particular function in one or more jobs.
 * @author credentialengine.org
 * @class WorkRole
 * @module org.credentialengine
 */
module.exports = class WorkRole extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","WorkRole");
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
	 * http://purl.org/ctdlasn/terms/knowledgeEmbodied
	 * Body of information embodied either directly or indirectly in this resource.
	 * @property knowledgeEmbodied
	 * @type anyURI
	 */
	knowledgeEmbodied;

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
	 * http://purl.org/ctdl/terms/hasTask
	 * Task related to this resource.
	 * @property hasTask
	 * @type Task
	 */
	hasTask;

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