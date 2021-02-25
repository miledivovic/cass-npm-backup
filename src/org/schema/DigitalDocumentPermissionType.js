/**
 *  Schema.org/DigitalDocumentPermissionType
 *  A type of permission which can be granted for accessing a digital document.
 * 
 *  @author schema.org
 *  @class DigitalDocumentPermissionType
 *  @module org.schema
 *  @extends Enumeration
 */
var DigitalDocumentPermissionType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "DigitalDocumentPermissionType";
};
DigitalDocumentPermissionType = stjs.extend(DigitalDocumentPermissionType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
