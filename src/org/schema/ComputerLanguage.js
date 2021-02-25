/**
 *  Schema.org/ComputerLanguage
 *  This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
 * 
 *  @author schema.org
 *  @class ComputerLanguage
 *  @module org.schema
 *  @extends Intangible
 */
var ComputerLanguage = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ComputerLanguage";
};
ComputerLanguage = stjs.extend(ComputerLanguage, Intangible, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
