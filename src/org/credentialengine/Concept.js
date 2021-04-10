/**
 * skos:Concept
 * Term in a controlled vocabulary.
 * @author credentialengine.org
 * @class Concept
 * @module org.credentialengine
 */
module.exports = class Concept extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","Concept");
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
	 * skos:altLabel
	 * Non-preferred label for the concept used to relate a concept synonym to the preferred label.
	 * @property altLabel
	 * @type langString
	 */
	altLabel;

	/**
	 * skos:broader
	 * Concept that is broader in some way than this concept.
	 * @property broader
	 * @type Concept
	 */
	broader;

	/**
	 * skos:broadMatch
	 * Assertion indicates that the referenced concept is broader in some way than this concept.
	 * @property broadMatch
	 * @type Concept
	 */
	broadMatch;

	/**
	 * skos:changeNote
	 * Text describing a significant change to the concept.
	 * @property changeNote
	 * @type langString
	 */
	changeNote;

	/**
	 * skos:closeMatch
	 * Assertion indicates that two concepts are sufficiently similar that they can be used interchangeably.
	 * @property closeMatch
	 * @type Concept
	 */
	closeMatch;

	/**
	 * skos:definition
	 * Supplies a complete explanation of the intended meaning of a concept.
	 * @property definition
	 * @type langString
	 */
	definition;

	/**
	 * skos:exactMatch
	 * Indicates semantic similarity denoting an even higher degree of closeness than skos:closeMatch.
	 * @property exactMatch
	 * @type Concept
	 */
	exactMatch;

	/**
	 * skos:hiddenLabel
	 * Label not intended for public presentation but to assist applications in disambiguating searcher intent - e.g., hidden labels can be used for common misspelling or a colloquial expression.
	 * @property hiddenLabel
	 * @type langString
	 */
	hiddenLabel;

	/**
	 * skos:inScheme
	 * Concept scheme to which this concept belongs.
	 * @property inScheme
	 * @type ConceptScheme
	 */
	inScheme;

	/**
	 * skos:narrower
	 * Concept that is narrower in some way than this concept.
	 * @property narrower
	 * @type Concept
	 */
	narrower;

	/**
	 * skos:narrowMatch
	 * Assertion indicates that the referenced concept is narrower in some way than this concept.
	 * @property narrowMatch
	 * @type Concept
	 */
	narrowMatch;

	/**
	 * skos:notation
	 * Alphanumeric notation or ID code as defined by the promulgating body to identify this resource.
	 * @property notation
	 * @type string
	 */
	notation;

	/**
	 * skos:note
	 * Annotations to the concept for purposes of general documentation.
	 * @property note
	 * @type langString
	 */
	note;

	/**
	 * skos:prefLabel
	 * Preferred language-tagged label representing this concept.
	 * @property prefLabel
	 * @type langString
	 */
	prefLabel;

	/**
	 * skos:related
	 * Assertion indicating an associative, non-hierarchical relationship between the two concepts where neither is broader nor narrower than the other.
	 * @property related
	 * @type Concept
	 */
	related;

	/**
	 * skos:topConceptOf
	 * Concept scheme for which this concept is a top node in a hierarchy of concepts.
	 * @property topConceptOf
	 * @type ConceptScheme
	 */
	topConceptOf;

}