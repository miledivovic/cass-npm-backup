/**
 *  Schema.org/GenderType
 *  An enumeration of genders.
 * 
 *  @author schema.org
 *  @class GenderType
 *  @module org.schema
 *  @extends Enumeration
 */
var GenderType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "GenderType";
};
GenderType = stjs.extend(GenderType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
