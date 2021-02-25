/**
 *  Schema.org/Specialty
 *  Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 * 
 *  @author schema.org
 *  @class Specialty
 *  @module org.schema
 *  @extends Enumeration
 */
var Specialty = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "Specialty";
};
Specialty = stjs.extend(Specialty, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
