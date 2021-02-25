/**
 *  Schema.org/ApplyAction
 *  The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 * 
 *  @author schema.org
 *  @class ApplyAction
 *  @module org.schema
 *  @extends OrganizeAction
 */
var ApplyAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    OrganizeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ApplyAction";
};
ApplyAction = stjs.extend(ApplyAction, OrganizeAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
