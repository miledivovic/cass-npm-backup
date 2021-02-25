/**
 *  Schema.org/GovernmentPermit
 *  A permit issued by a government agency.
 * 
 *  @author schema.org
 *  @class GovernmentPermit
 *  @module org.schema
 *  @extends Permit
 */
var GovernmentPermit = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Permit.call(this);
    this.context = "http://schema.org/";
    this.type = "GovernmentPermit";
};
GovernmentPermit = stjs.extend(GovernmentPermit, Permit, [], null, {validFor: "Duration", issuedBy: "Organization", issuedThrough: "Service", permitAudience: "Audience", validIn: "AdministrativeArea", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
