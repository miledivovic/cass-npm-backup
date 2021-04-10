/**
 * credentialengine.org/Competency
 * Description of knowledge, skills, and/or abilities.
 * @author credentialengine.org
 * @class Competency
 * @module org.credentialengine
 */
module.exports = class Competency extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","Competency");
	}

	/**
	 * asn:hasProgressionLevel
	 * Reference to a specific point in a progression model.
	 * @property hasProgressionLevel
	 * @type ProgressionLevel
	 */
	hasProgressionLevel;

	/**
	 * http://purl.org/ctdlasn/terms/abilityEmbodied
	 * Enduring attributes of the individual that influence performance are embodied either directly or indirectly in this resource.
	 * @property abilityEmbodied
	 * @type anyURI
	 */
	abilityEmbodied;

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
	 * http://purl.org/ctdlasn/terms/altCodedNotation
	 * An alphanumeric notation or ID code identifying this competency in common use among end-users.
	 * Unlike the codedNotation property, the value for the altCodedNotation property need not be an official identifier created by the promulgating agency. It must be an identifier in common use among end-users of the competency. This property should be seldom used and only with a clear demonstration of need (i.e., in common use). For example, in the Common Core State Standards (Math) in the U.S., the official codedNotation of "CCSS.Math.Content.1.NBT.C.4" is abbreviated in common use by end-users to the unofficial altCodedNotation of "1.NBT.4".
	 * @property altCodedNotation
	 * @type string
	 */
	altCodedNotation;

	/**
	 * http://purl.org/ctdlasn/terms/author
	 * A person or organization chiefly responsible for the intellectual or artistic content of this competency framework or competency.
	 * @property author
	 * @type string
	 */
	author;

	/**
	 * http://purl.org/ctdlasn/terms/broadAlignment
	 * The referenced competency covers all of the relevant concepts in this competency as well as relevant concepts not found in this competency.
	 * @property broadAlignment
	 * @type Competency
	 */
	broadAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/codedNotation
	 * An alphanumeric notation or ID code as defined by the promulgating body to identify this resource.
	 * This property should be used only for codes created by the promulgating body. For alternative competency notations in common use in the community of practice, but not endorsed by the promulgating body, the altCodedNotation property can be used (sparingly on clear evidence of common use and need).
	 * @property codedNotation
	 * @type string
	 */
	codedNotation;

	/**
	 * http://purl.org/ctdlasn/terms/comment
	 * Supplemental text provided by the promulgating body that clarifies the nature, scope or use of this resource.
	 * Use this property when the text provides useful context for this resource.
	 * @property comment
	 * @type langString
	 */
	comment;

	/**
	 * http://purl.org/ctdlasn/terms/competencyCategory
	 * The textual label identifying the category of the competency as designated by the promulgating body.
	 * This property points to a class, not to instances of that class. For example, where two competencies in a competency framework have been identified respectively by the promulgating agency as "Strand: Rennaisance" and "Strand: Social history", the statementLabel for both these competencies is "Strand".
	 * @property competencyCategory
	 * @type langString
	 */
	competencyCategory;

	/**
	 * http://purl.org/ctdlasn/terms/competencyLabel
	 * Short identifying phrase or name applied to a competency by the creator of the competency framework.
	 * @property competencyLabel
	 * @type langString
	 */
	competencyLabel;

	/**
	 * http://purl.org/ctdlasn/terms/competencyText
	 * The text of the competency.
	 * @property competencyText
	 * @type langString
	 */
	competencyText;

	/**
	 * http://purl.org/ctdlasn/terms/complexityLevel
	 * The expected performance level of a learner or professional as defined by a competency.
	 * @property complexityLevel
	 * @type ProficiencyScale
	 */
	complexityLevel;

	/**
	 * http://purl.org/ctdlasn/terms/comprisedOf
	 * This competency includes, comprehends or encompasses, in whole or in part, the meaning, nature or importance of the referenced competency.
	 * @property comprisedOf
	 * @type Competency
	 */
	comprisedOf;

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
	 * http://purl.org/ctdlasn/terms/crossSubjectReference
	 * A relationship between this competency and a competency in a separate competency framework.
	 * An interdisciplinary statement reference.
	 * @property crossSubjectReference
	 * @type Competency
	 */
	crossSubjectReference;

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
	 * http://purl.org/ctdlasn/terms/derivedFrom
	 * A version of the entity being referenced that has been modified in meaning through editing, extension or refinement.
	 * @property derivedFrom
	 * @type Competency | CompetencyFramework | TransferValueProfile
	 */
	derivedFrom;

	/**
	 * http://purl.org/ctdlasn/terms/educationLevelType
	 * A general statement describing the education or training context. Alternatively, a more specific statement of the location of the audience in terms of its progression through an education or training context.
	 * Best practice is to use terms from the http://purl.org/ctdl/terms/AudienceLevel concept scheme.
	 * @property educationLevelType
	 * @type Concept
	 */
	educationLevelType;

	/**
	 * http://purl.org/ctdlasn/terms/exactAlignment
	 * The relevant concepts in this competency and the referenced competency are coextensive.
	 * @property exactAlignment
	 * @type Competency
	 */
	exactAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/hasChild
	 * The referenced resource is lower in some arbitrary hierarchy than this resource.
	 * This property identifies a child node in the downward path in the chain of resources in a taxon path.
	 * @property hasChild
	 * @type Competency | AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | SelectionComponent | Task | WorkExperienceComponent
	 */
	hasChild;

	/**
	 * http://purl.org/ctdlasn/terms/identifier
	 * An alternative URI by which this competency framework or competency is identified.
	 * @property identifier
	 * @type anyURI
	 */
	identifier;

	/**
	 * http://purl.org/ctdlasn/terms/isChildOf
	 * The referenced resource is higher in some arbitrary hierarchy than this resource.
	 * @property isChildOf
	 * @type Competency | AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | Pathway | SelectionComponent | Task | WorkExperienceComponent
	 */
	isChildOf;

	/**
	 * http://purl.org/ctdlasn/terms/isPartOf
	 * Competency framework that this competency is a part of.
	 * @property isPartOf
	 * @type CompetencyFramework
	 */
	isPartOf;

	/**
	 * http://purl.org/ctdlasn/terms/isTopChildOf
	 * Indicates that this competency is at the top of some arbitrary hierarchy.
	 * @property isTopChildOf
	 * @type CompetencyFramework
	 */
	isTopChildOf;

	/**
	 * http://purl.org/ctdlasn/terms/isVersionOf
	 * A related competency of which this competency is a version, edition, or adaptation.
	 * Changes in version imply substantive changes in content rather than differences in format.
	 * @property isVersionOf
	 * @type Competency
	 */
	isVersionOf;

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
	 * http://purl.org/ctdlasn/terms/localSubject
	 * The text string denoting the subject of the competency framework or competency as designated by the promulgating agency.
	 * @property localSubject
	 * @type langString
	 */
	localSubject;

	/**
	 * http://purl.org/ctdlasn/terms/majorAlignment
	 * Major overlap of relevant concepts between the this competency and the referenced competency.
	 * @property majorAlignment
	 * @type Competency
	 */
	majorAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/minorAlignment
	 * Minor overlap of relevant concepts between this competency and the referenced competency.
	 * @property minorAlignment
	 * @type Competency
	 */
	minorAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/narrowAlignment
	 * This competency covers all of the relevant concepts in the referenced competency as well as relevant concepts not found in the referenced competency.
	 * @property narrowAlignment
	 * @type Competency
	 */
	narrowAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/prerequisiteAlignment
	 * The referenced resource is a prerequisite to this resource.
	 * @property prerequisiteAlignment
	 * @type Competency
	 */
	prerequisiteAlignment;

	/**
	 * http://purl.org/ctdlasn/terms/shouldIndex
	 * Indicates whether correlators should or should not assign the competency during correlation.
	 * @property shouldIndex
	 * @type boolean
	 */
	shouldIndex;

	/**
	 * http://purl.org/ctdlasn/terms/skillEmbodied
	 * Ability to apply knowledge and use know-how to complete tasks and solve problems including types or categories of developed proficiency or dexterity in mental operations and physical processes is embodied either directly or indirectly in this resource.
	 * @property skillEmbodied
	 * @type anyURI
	 */
	skillEmbodied;

	/**
	 * http://purl.org/ctdlasn/terms/taskEmbodied
	 * Specifically defined piece of work embodied either directly or indirectly in this resource.
	 * @property taskEmbodied
	 * @type anyURI
	 */
	taskEmbodied;

	/**
	 * http://purl.org/ctdlasn/terms/weight
	 * An asserted measurement of the weight, degree, percent, or strength of a recommendation, requirement, or comparison.
	 * Best practice is to assigned a decimal value weight between 0 and 1 that indicates the strength of the assertion, with 0 being weakest and 1 being strongest.
	 * @property weight
	 * @type float
	 */
	weight;

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