/**
 *  Schema.org/RestrictedDiet
 *  A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.
 * 
 *  @author schema.org
 *  @class RestrictedDiet
 *  @module org.schema
 *  @extends Enumeration
 */
var RestrictedDiet = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "RestrictedDiet";
};
RestrictedDiet = stjs.extend(RestrictedDiet, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
