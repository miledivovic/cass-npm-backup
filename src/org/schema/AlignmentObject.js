/**
 *  Schema.org/AlignmentObject
 *  An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 * 
 *  @author schema.org
 *  @class AlignmentObject
 *  @module org.schema
 *  @extends Intangible
 */
var AlignmentObject = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "AlignmentObject";
};
AlignmentObject = stjs.extend(AlignmentObject, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/targetDescription
     *  The description of a node in an established educational framework.
     * 
     *  @property targetDescription
     *  @type Text
     */
    targetDescription = null;
    /**
     *  Schema.org/alignmentType
     *  A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.
     * 
     *  @property alignmentType
     *  @type Text
     */
    alignmentType = null;
    /**
     *  Schema.org/targetUrl
     *  The URL of a node in an established educational framework.
     * 
     *  @property targetUrl
     *  @type URL
     */
    targetUrl = null;
    /**
     *  Schema.org/targetName
     *  The name of a node in an established educational framework.
     * 
     *  @property targetName
     *  @type Text
     */
    targetName = null;
    /**
     *  Schema.org/educationalFramework
     *  The framework to which the resource being described is aligned.
     * 
     *  @property educationalFramework
     *  @type Text
     */
    educationalFramework = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
