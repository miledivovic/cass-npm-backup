/**
 *  credentialengine.org/FinancialAlignmentObject
 *  An alignment to a financial framework.
 *  Examples include, but are not limited to, Free Application for Federal Student Aid (FAFSA) in the U.S.
 *  @author credentialengine.org
 *  @class FinancialAlignmentObject
 *  @module org.credentialengine
 *  @extends CredentialAlignmentObject
 */
var FinancialAlignmentObject = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    CredentialAlignmentObject.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "FinancialAlignmentObject";
};
FinancialAlignmentObject = stjs.extend(FinancialAlignmentObject, CredentialAlignmentObject, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/alignmentDate
     *  The date  the alignment was made.
     *  @property alignmentDate
     *  @type date
     */
    prototype.alignmentDate = null;
    /**
     *  http://purl.org/ctdl/terms/alignmentType
     *  Type of relationship between two entities.
     *  In CTDL, the alignment type value is definitively identified by the property for which the AlignmentObject is the rdfs:range; therefore, use of this property is generally redundant.
     *  @property alignmentType
     *  @type string
     */
    prototype.alignmentType = null;
    /**
     *  http://purl.org/ctdl/terms/codedNotation
     *  Set of alpha-numeric symbols that uniquely identifies an item and supports its discovery and use.
     *  Examples include the alpha-numeric code "CCSS.MATH.CONTENT.HSA.CED.A.2" identifying a node in the U.S. Common Core State Standards on creating equations in algebra, or, the code "8021" in the U.S. Standard Industrial Classification (SIC) for identifying the occupational context for "Offices and Clinics of Dentists".
     *  @property codedNotation
     *  @type string
     */
    prototype.codedNotation = null;
    /**
     *  http://purl.org/ctdl/terms/framework
     *  Credential framework to which the entity is aligned.
     *  Frameworks may include, but are not limited to, competency frameworks and concept schemes such as industry, occupation, and instructional program codes.
     *  @property framework
     *  @type anyURI
     */
    prototype.framework = null;
    /**
     *  http://purl.org/ctdl/terms/frameworkName
     *  Name of the framework.
     *  @property frameworkName
     *  @type langString
     */
    prototype.frameworkName = null;
    /**
     *  http://purl.org/ctdl/terms/targetNode
     *  Individual entry in a formally defined framework such as a competency or an industry, instructional program, or occupation code.
     *  The target node returned must be the exact competency or concept being described and no other competency or concept. References to data or a document that returns all of the competencies or concepts in the framework to which the target node belongs should use the ceterms:framework property.
     *  @property targetNode
     *  @type anyURI
     */
    prototype.targetNode = null;
    /**
     *  http://purl.org/ctdl/terms/targetNodeDescription
     *  Textual description of an individual concept or competency in a formally defined framework.
     *  @property targetNodeDescription
     *  @type langString
     */
    prototype.targetNodeDescription = null;
    /**
     *  http://purl.org/ctdl/terms/targetNodeName
     *  Name of an individual concept or competency in a formally defined framework.
     *  @property targetNodeName
     *  @type langString
     */
    prototype.targetNodeName = null;
    /**
     *  http://purl.org/ctdl/terms/weight
     *  Measurement of the weight, degree, percent, or strength of a recommendation, requirement, or comparison.
     *  @property weight
     *  @type float
     */
    prototype.weight = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
