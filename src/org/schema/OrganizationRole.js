/**
 *  Schema.org/OrganizationRole
 *  A subclass of Role used to describe roles within organizations.
 * 
 *  @author schema.org
 *  @class OrganizationRole
 *  @module org.schema
 *  @extends Role
 */
var OrganizationRole = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Role.call(this);
    this.context = "http://schema.org/";
    this.type = "OrganizationRole";
};
OrganizationRole = stjs.extend(OrganizationRole, Role, [], function(constructor, prototype) {
    /**
     *  Schema.org/numberedPosition
     *  A number associated with a role in an organization, for example, the number on an athlete's jersey.
     * 
     *  @property numberedPosition
     *  @type Number
     */
    numberedPosition = null;
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
