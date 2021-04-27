/**
 * credentialengine.org/Occupation
 * Profession, trade, or career field that may involve training and/or a formal qualification.
 * @author credentialengine.org
 * @class Occupation
 * @module org.credentialengine
 */
module.exports = class Occupation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "Occupation");
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
	 * http://purl.org/ctdl/terms/hasJob
	 * Job related to this resource.
	 * @property hasJob
	 * @type Job
	 */
	hasJob;

	/**
	 * http://purl.org/ctdl/terms/hasSpecialization
	 * More specialized profession, trade, or career field that is encompassed by the one being described.
	 * @property hasSpecialization
	 * @type Occupation
	 */
	hasSpecialization;

	/**
	 * http://purl.org/ctdl/terms/hasWorkRole
	 * Work Role related to this resource.
	 * @property hasWorkRole
	 * @type WorkRole
	 */
	hasWorkRole;

	/**
	 * http://purl.org/ctdl/terms/identifier
	 * Alphanumeric token that identifies this resource and information about the token's originating context or scheme.
	 * @property identifier
	 * @type IdentifierValue
	 */
	identifier;

	/**
	 * http://purl.org/ctdl/terms/industryType
	 * Type of industry; select from an existing enumeration of such types such as the SIC, NAICS, and ISIC classifications.
	 * @property industryType
	 * @type CredentialAlignmentObject
	 */
	industryType;

	/**
	 * http://purl.org/ctdl/terms/isSpecializationOf
	 * Less specialized profession, trade, or career field that encompasses the one being described.
	 * @property isSpecializationOf
	 * @type Occupation
	 */
	isSpecializationOf;

	/**
	 * http://purl.org/ctdl/terms/keyword
	 * Keyword or key phrase describing relevant aspects of an entity.
	 * @property keyword
	 * @type langString
	 */
	keyword;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/occupationType
	 * Type of occupation; select from an existing enumeration of such types.
	 * @property occupationType
	 * @type CredentialAlignmentObject
	 */
	occupationType;

	/**
	 * http://purl.org/ctdl/terms/sameAs
	 * Another source of information about the entity being described.
	 * Other sources may include descriptions of entities in open databases such as DBpedia, Wikidata, the Credential Engine Registry, or other platforms.
	 * @property sameAs
	 * @type anyURI
	 */
	sameAs;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

	/**
	 * http://purl.org/ctdl/terms/versionIdentifier
	 * Alphanumeric identifier of the version of the credential that is unique within the organizational context of its owner.
	 * The credential version captured here is any local identifier used by the credential owner to identify the version of the credential in the its local system.
	 * @property versionIdentifier
	 * @type IdentifierValue
	 */
	versionIdentifier;
};
