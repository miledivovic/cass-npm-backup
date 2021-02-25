/**
 *  Schema.org/DigitalDocumentPermission
 *  A permission for a particular person or group to access a particular file.
 * 
 *  @author schema.org
 *  @class DigitalDocumentPermission
 *  @module org.schema
 *  @extends Intangible
 */
var DigitalDocumentPermission = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "DigitalDocumentPermission";
};
DigitalDocumentPermission = stjs.extend(DigitalDocumentPermission, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/grantee
     *  The person, organization, contact point, or audience that has been granted this permission.
     * 
     *  @property grantee
     *  @type ContactPoint
     */
    prototype.grantee = null;
    /**
     *  Schema.org/permissionType
     *  The type of permission granted the person, organization, or audience.
     * 
     *  @property permissionType
     *  @type DigitalDocumentPermissionType
     */
    prototype.permissionType = null;
}, {grantee: "ContactPoint", permissionType: "DigitalDocumentPermissionType", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
