/**
 *  Schema.org/ContactPointOption
 *  Enumerated options related to a ContactPoint.
 * 
 *  @author schema.org
 *  @class ContactPointOption
 *  @module org.schema
 *  @extends Enumeration
 */
var ContactPointOption = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "ContactPointOption";
};
ContactPointOption = stjs.extend(ContactPointOption, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
