/**
 *  Schema.org/StructuredValue
 *  Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 * 
 *  @author schema.org
 *  @class StructuredValue
 *  @module org.schema
 *  @extends Intangible
 */
var StructuredValue = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "StructuredValue";
};
StructuredValue = stjs.extend(StructuredValue, Intangible, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
