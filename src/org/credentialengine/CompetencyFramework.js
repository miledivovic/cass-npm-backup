/**
 *  credentialengine.org/CompetencyFramework
 *  A description of a competency framework as a whole.
 *  @author credentialengine.org
 *  @class CompetencyFramework
 *  @module org.credentialengine
 */
var CompetencyFramework = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "CompetencyFramework");
};
CompetencyFramework = stjs.extend(CompetencyFramework, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdlasn/terms/alignFrom
     *  A competency framework or competency from which this competency framework or competency is aligned.
     *  An alignment is an assertion of some degree of equivalency between the subject and the object of the assertion.
     *  @property alignFrom
     *  @type Competency | CompetencyFramework
     */
    prototype.alignFrom = null;
    /**
     *  http://purl.org/ctdlasn/terms/alignTo
     *  A competency framework or competency to which this competency framework or competency is aligned.
     *  An alignment is an assertion of some degree of equivalency between the subject and the object of the assertion.
     *  @property alignTo
     *  @type Competency | CompetencyFramework
     */
    prototype.alignTo = null;
    /**
     *  http://purl.org/ctdlasn/terms/author
     *  A person or organization chiefly responsible for the intellectual or artistic content of this competency framework or competency.
     *  @property author
     *  @type string
     */
    prototype.author = null;
    /**
     *  http://purl.org/ctdlasn/terms/conceptKeyword
     *  A word or phrase used by the promulgating agency to refine and differentiate individual competencies contextually.
     *  The conceptKeyword property is used in ASN-conforming data solely to denote the significant topicality of the competency using free-text keywords and phrases derived and assigned by the indexer, e.g., "George Washington", "Ayers Rock", etc.
     *  @property conceptKeyword
     *  @type langString
     */
    prototype.conceptKeyword = null;
    /**
     *  http://purl.org/ctdlasn/terms/conceptTerm
     *  A term drawn from a controlled vocabulary used by the promulgating agency to refine and differentiate individual competencies contextually.
     *  The conceptTerm property is used in ASN-conforming data solely to denote the topicality of the competency - e.g., "Pythagorean Theorem", "Trigonometric functions", "Forces and energy", "Scientific method", "Oral history" etc. The value of the conceptTerm property must be drawn from a controlled vocabulary where concepts have all been assigned URI - e.g., terms drawn from the Australia Schools Online Thesaurus (ScOT).
     *  @property conceptTerm
     *  @type Concept
     */
    prototype.conceptTerm = null;
    /**
     *  http://purl.org/ctdlasn/terms/creator
     *  An entity primarily responsible for making this competency framework or competency.
     *  The creator property is used with non-canonical statements created by a third party.
     *  @property creator
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.creator = null;
    /**
     *  http://purl.org/ctdlasn/terms/dateCopyrighted
     *  Date of a statement of copyright for this competency framework, such as ©2017.
     *  @property dateCopyrighted
     *  @type string
     */
    prototype.dateCopyrighted = null;
    /**
     *  http://purl.org/ctdlasn/terms/dateCreated
     *  Date of creation of this competency framework or competency.
     *  The dateCreated property is used for non-canonical statements created by a third party.
     *  @property dateCreated
     *  @type date
     */
    prototype.dateCreated = null;
    /**
     *  http://purl.org/ctdlasn/terms/dateModified
     *  The date on which this framework or competency was most recently modified in some way.
     *  @property dateModified
     *  @type dateTime
     */
    prototype.dateModified = null;
    /**
     *  http://purl.org/ctdlasn/terms/dateValidFrom
     *  Beginning date of validity of this competency framework.
     *  @property dateValidFrom
     *  @type dateTime
     */
    prototype.dateValidFrom = null;
    /**
     *  http://purl.org/ctdlasn/terms/dateValidUntil
     *  End date of validity of this competency framework.
     *  @property dateValidUntil
     *  @type dateTime
     */
    prototype.dateValidUntil = null;
    /**
     *  http://purl.org/ctdlasn/terms/derivedFrom
     *  A third party version of the entity being reference that has been modified in meaning through editing, extension or refinement.
     *  @property derivedFrom
     *  @type Competency | CompetencyFramework
     */
    prototype.derivedFrom = null;
    /**
     *  http://purl.org/ctdlasn/terms/description
     *  A short description of this competency framework.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdlasn/terms/educationLevelType
     *  A general statement describing the education or training context. Alternatively, a more specific statement of the location of the audience in terms of its progression through an education or training context.
     *  Best practice is to use terms from the http://purl.org/ctdl/terms/AudienceLevel concept scheme.
     *  @property educationLevelType
     *  @type Concept
     */
    prototype.educationLevelType = null;
    /**
     *  http://purl.org/ctdlasn/terms/hasTopChild
     *  Top-level child competency of a competency framework.
     *  @property hasTopChild
     *  @type Competency
     */
    prototype.hasTopChild = null;
    /**
     *  http://purl.org/ctdlasn/terms/identifier
     *  An alternative URI by which this competency framework or competency is identified.
     *  @property identifier
     *  @type anyURI
     */
    prototype.identifier = null;
    /**
     *  http://purl.org/ctdlasn/terms/inLanguage
     *  The primary language used in or by this competency framework or competency.
     *  @property inLanguage
     *  @type language
     */
    prototype.inLanguage = null;
    /**
     *  http://purl.org/ctdlasn/terms/license
     *  A legal document giving official permission to do something with this competency framework.
     *  Value must be the URI to a license document (e.g., Creative Commons license or bespoke license).
     *  @property license
     *  @type anyURI
     */
    prototype.license = null;
    /**
     *  http://purl.org/ctdlasn/terms/localSubject
     *  The text string denoting the subject of the competency framework or competency as designated by the promulgating agency.
     *  @property localSubject
     *  @type langString
     */
    prototype.localSubject = null;
    /**
     *  http://purl.org/ctdlasn/terms/name
     *  The name or title of this competency framework.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdlasn/terms/publicationStatusType
     *  The publication status of the of this competency framework.
     *  @property publicationStatusType
     *  @type Concept
     */
    prototype.publicationStatusType = null;
    /**
     *  http://purl.org/ctdlasn/terms/publisher
     *  An agent responsible for making this entity available.
     *  Also referred to as the promulgating agency of the entity.
     *  @property publisher
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.publisher = null;
    /**
     *  http://purl.org/ctdlasn/terms/publisherName
     *  Name of an agent responsible for making this entity available.
     *  Also referred to as the promulgating agency of the entity.
     *  @property publisherName
     *  @type langString
     */
    prototype.publisherName = null;
    /**
     *  http://purl.org/ctdlasn/terms/repositoryDate
     *  The date this competency framework was added to the repository.
     *  @property repositoryDate
     *  @type date
     */
    prototype.repositoryDate = null;
    /**
     *  http://purl.org/ctdlasn/terms/rights
     *  Information about rights held in and over this competency framework.
     *  @property rights
     *  @type anyURI
     */
    prototype.rights = null;
    /**
     *  http://purl.org/ctdlasn/terms/rightsHolder
     *  An agent owning or managing rights over this competency framework.
     *  @property rightsHolder
     *  @type CredentialOrganization | QACredentialOrganization
     */
    prototype.rightsHolder = null;
    /**
     *  http://purl.org/ctdlasn/terms/source
     *  The original competency framework which this competency framework is based on or derived from.
     *  @property source
     *  @type anyURI
     */
    prototype.source = null;
    /**
     *  http://purl.org/ctdlasn/terms/tableOfContents
     *  A list of sub-units of this competency framework.
     *  The table of contents is a "manifest", or a hierarchic, ordered, syntactic representation of the competencies that are part of this competency framework.
     *  @property tableOfContents
     *  @type langString
     */
    prototype.tableOfContents = null;
}, {alignFrom: "Object", alignTo: "Object", conceptTerm: "Concept", creator: "Object", derivedFrom: "Object", educationLevelType: "Concept", hasTopChild: "Competency", publicationStatusType: "Concept", publisher: "Object", rightsHolder: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
