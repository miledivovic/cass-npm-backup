/**
 * credentialengine.org/PathwaySet
 * A roadmap of multiple related pathways that lead to one or more destinations.
 * @author credentialengine.org
 * @class PathwaySet
 * @module org.credentialengine
 */
module.exports = class PathwaySet extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","PathwaySet");
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
	 * http://purl.org/ctdl/terms/hasPathway
	 * A pathway related to this resource.
	 * @property hasPathway
	 * @type Pathway
	 */
	hasPathway;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/offeredBy
	 * Agent that offers the resource.
	 * @property offeredBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	offeredBy;

	/**
	 * http://purl.org/ctdl/terms/ownedBy
	 * Organization or person with an enforceable claim or legal title to the resource.
	 * Agent includes credentialing organizations, quality assurance organizations and persons. It does not not include credential holders.
	 * @property ownedBy
	 * @type CredentialOrganization | CredentialPerson | QACredentialOrganization
	 */
	ownedBy;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

}