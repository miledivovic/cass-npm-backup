/**
 * credentialengine.org/CompetencyFramework
 * A description of a competency framework as a whole.
 * @author credentialengine.org
 * @class CompetencyFramework
 * @module org.credentialengine
 */
module.exports = class CompetencyFramework extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","CompetencyFramework");
	}

	/**
	 * asn:hasProgressionModel
	 * Reference to a progression model used.
	 * @property hasProgressionModel
	 * @type ProgressionModel
	 */
	hasProgressionModel;

	/**
	 * http://purl.org/ctdlasn/terms/alignFrom
	 * A competency framework or competency from which this competency framework or competency is aligned.
	 * An alignment is an assertion of some degree of equivalency between the subject and the object of the assertion.
	 * @property alignFrom
	 * @type Competency | CompetencyFramework
	 */
	alignFrom;

	/**
	 * http://purl.org/ctdlasn/terms/alignTo
	 * A competency framework or competency to which this competency framework or competency is aligned.
	 * An alignment is an assertion of some degree of equivalency between the subject and the object of the assertion.
	 * @property alignTo
	 * @type Competency | CompetencyFramework
	 */
	alignTo;

	/**
	 * http://purl.org/ctdlasn/terms/author
	 * A person or organization chiefly responsible for the intellectual or artistic content of this competency framework or competency.
	 * @property author
	 * @type string
	 */
	author;

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
	 * http://purl.org/ctdlasn/terms/dateValidFrom
	 * Beginning date of validity of this competency framework.
	 * @property dateValidFrom
	 * @type dateTime
	 */
	dateValidFrom;

	/**
	 * http://purl.org/ctdlasn/terms/dateValidUntil
	 * End date of validity of this competency framework.
	 * @property dateValidUntil
	 * @type dateTime
	 */
	dateValidUntil;

	/**
	 * http://purl.org/ctdlasn/terms/derivedFrom
	 * A version of the entity being referenced that has been modified in meaning through editing, extension or refinement.
	 * @property derivedFrom
	 * @type Competency | CompetencyFramework | TransferValueProfile
	 */
	derivedFrom;

	/**
	 * http://purl.org/ctdlasn/terms/description
	 * A short description of this resource.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdlasn/terms/educationLevelType
	 * A general statement describing the education or training context. Alternatively, a more specific statement of the location of the audience in terms of its progression through an education or training context.
	 * Best practice is to use terms from the http://purl.org/ctdl/terms/AudienceLevel concept scheme.
	 * @property educationLevelType
	 * @type Concept
	 */
	educationLevelType;

	/**
	 * http://purl.org/ctdlasn/terms/hasTopChild
	 * Top-level child competency of a competency framework.
	 * @property hasTopChild
	 * @type Competency
	 */
	hasTopChild;

	/**
	 * http://purl.org/ctdlasn/terms/identifier
	 * An alternative URI by which this competency framework or competency is identified.
	 * @property identifier
	 * @type anyURI
	 */
	identifier;

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
	 * http://purl.org/ctdlasn/terms/localSubject
	 * The text string denoting the subject of the competency framework or competency as designated by the promulgating agency.
	 * @property localSubject
	 * @type langString
	 */
	localSubject;

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
	 * http://purl.org/ctdlasn/terms/repositoryDate
	 * The date this competency framework was added to the repository.
	 * @property repositoryDate
	 * @type date
	 */
	repositoryDate;

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
	 * http://purl.org/ctdlasn/terms/tableOfContents
	 * A list of sub-units of this competency framework.
	 * The table of contents is a "manifest", or a hierarchic, ordered, syntactic representation of the competencies that are part of this competency framework.
	 * @property tableOfContents
	 * @type langString
	 */
	tableOfContents;

	/**
	 * http://purl.org/ctdl/terms/ctid
	 * Globally unique Credential Transparency Identifier (CTID) by which the creator, owner or provider of a resource recognizes it in transactions with the external environment (e.g., in verifiable claims involving the resource).
	 * The CTID is the equivalent of a version identifier for the resource. Different versions of a resource are considered distinct expressions and each must be assigned its own CTID. Each version of a resource can have only one CTID assigned. However, a single version of a resource may have distinct identifier values for both the ctid property and the credentialId property. In such a case both identifiers will be recognized by the resource creator/owner/provider in transactions with the external environment.
	 * @property ctid
	 * @type string
	 */
	ctid;

	/**
	 * http://purl.org/ctdl/terms/industryType
	 * Type of industry; select from an existing enumeration of such types such as the SIC, NAICS, and ISIC classifications.
	 * @property industryType
	 * @type CredentialAlignmentObject
	 */
	industryType;

	/**
	 * http://purl.org/ctdl/terms/instructionalProgramType
	 * Type of instructional program; select from an existing enumeration of such types.
	 * @property instructionalProgramType
	 * @type CredentialAlignmentObject
	 */
	instructionalProgramType;

	/**
	 * http://purl.org/ctdl/terms/occupationType
	 * Type of occupation; select from an existing enumeration of such types.
	 * @property occupationType
	 * @type CredentialAlignmentObject
	 */
	occupationType;

}