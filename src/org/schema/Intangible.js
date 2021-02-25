/**
 *  Schema.org/Intangible
 *  A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 * 
 *  @author schema.org
 *  @class Intangible
 *  @module org.schema
 *  @extends Thing
 */
var Intangible = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Thing.call(this);
    this.context = "http://schema.org/";
    this.type = "Intangible";
};
Intangible = stjs.extend(Intangible, Thing, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
