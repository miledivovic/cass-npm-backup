/**
 * skos:ConceptScheme
 * A controlled vocabulary.
 * @author credentialengine.org
 * @class ConceptScheme
 * @module org.credentialengine
 */
module.exports = class ConceptScheme extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "ConceptScheme");
	}

	/**
	 * http://purl.org/ctdlasn/terms/conceptKeyword
	 * A word or phrase used by the promulgating agency to refine and differentiate individual resources contextually.
	 * The conceptKeyword property is used in ASN-conforming data solely to denote the significant topicality of the competency using free-text keywords and phrases derived and assigned by the indexer, e.g., "George Washington", "Ayers Rock", etc.
	 * @property conceptKeyword
	 * @type langString
	 */
	conceptKeyword;

	/**
	 * http://purl.org/ctdlasn/terms/conceptTerm
	 * A term drawn from a controlled vocabulary used by the promulgating agency to refine and differentiate individual resources contextually.
	 * The conceptTerm property is used in ASN-conforming data solely to denote the topicality of the competency - e.g., "Pythagorean Theorem", "Trigonometric functions", "Forces and energy", "Scientific method", "Oral history" etc. The value of the conceptTerm property must be drawn from a controlled vocabulary where concepts have all been assigned URI - e.g., terms drawn from the Australia Schools Online Thesaurus (ScOT).
	 * @property conceptTerm
	 * @type Concept
	 */
	conceptTerm;

	/**
	 * http://purl.org/ctdlasn/terms/creator
	 * An entity primarily responsible for making this resource.
	 * The creator property is used with non-canonical statements created by a third party.
	 * @property creator
	 * @type CredentialOrganization | QACredentialOrganization
	 */
	creator;

	/**
	 * http://purl.org/ctdlasn/terms/dateCopyrighted
	 * Date of a statement of copyright for this resource, such as ©2017.
	 * @property dateCopyrighted
	 * @type string
	 */
	dateCopyrighted;

	/**
	 * http://purl.org/ctdlasn/terms/dateCreated
	 * Date of creation of this resource.
	 * The dateCreated property is used for non-canonical statements created by a third party.
	 * @property dateCreated
	 * @type date
	 */
	dateCreated;

	/**
	 * http://purl.org/ctdlasn/terms/dateModified
	 * The date on which this resource was most recently modified in some way.
	 * @property dateModified
	 * @type dateTime
	 */
	dateModified;

	/**
	 * http://purl.org/ctdlasn/terms/description
	 * A short description of this resource.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdlasn/terms/inLanguage
	 * The primary language used in or by this resource.
	 * @property inLanguage
	 * @type language
	 */
	inLanguage;

	/**
	 * http://purl.org/ctdlasn/terms/license
	 * A legal document giving official permission to do something with this resource.
	 * Value must be the URI to a license document (e.g., Creative Commons license or bespoke license).
	 * @property license
	 * @type anyURI
	 */
	license;

	/**
	 * http://purl.org/ctdlasn/terms/name
	 * The name or title of this resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdlasn/terms/publicationStatusType
	 * The publication status of the of this resource.
	 * @property publicationStatusType
	 * @type Concept
	 */
	publicationStatusType;

	/**
	 * http://purl.org/ctdlasn/terms/publisher
	 * An agent responsible for making this resource available.
	 * Also referred to as the promulgating agency of the entity.
	 * @property publisher
	 * @type CredentialOrganization | QACredentialOrganization
	 */
	publisher;

	/**
	 * http://purl.org/ctdlasn/terms/publisherName
	 * Name of an agent responsible for making this resource available.
	 * Also referred to as the promulgating agency of the entity.
	 * @property publisherName
	 * @type langString
	 */
	publisherName;

	/**
	 * http://purl.org/ctdlasn/terms/rights
	 * Information about rights held in and over this resource.
	 * @property rights
	 * @type langString
	 */
	rights;

	/**
	 * http://purl.org/ctdlasn/terms/rightsHolder
	 * An agent owning or managing rights over this resource.
	 * @property rightsHolder
	 * @type CredentialOrganization | QACredentialOrganization
	 */
	rightsHolder;

	/**
	 * http://purl.org/ctdlasn/terms/source
	 * The original competency framework which this resource is based on or derived from.
	 * @property source
	 * @type anyURI
	 */
	source;

	/**
	 * http://purl.org/ctdl/terms/ctid
	 * Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a resource recognizes it in transactions with the external environment (e.g., in verifiable claims involving the resource).
	 * The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
	 * @property ctid
	 * @type string
	 */
	ctid;

	/**
	 * skos:hasTopConcept
	 * Concept of the scheme at the top of a hierarchy of narrower concepts.
	 * @property hasTopConcept
	 * @type Concept
	 */
	hasTopConcept;
};
