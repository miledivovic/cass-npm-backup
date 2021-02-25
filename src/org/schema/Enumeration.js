/**
 *  Schema.org/Enumeration
 *  Lists or enumerations—for example, a list of cuisines or music genres, etc.
 * 
 *  @author schema.org
 *  @class Enumeration
 *  @module org.schema
 *  @extends Intangible
 */
var Enumeration = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Enumeration";
};
Enumeration = stjs.extend(Enumeration, Intangible, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
