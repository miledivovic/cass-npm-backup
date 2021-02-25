/**
 *  Schema.org/AllocateAction
 *  The act of organizing tasks/objects/events by associating resources to it.
 * 
 *  @author schema.org
 *  @class AllocateAction
 *  @module org.schema
 *  @extends OrganizeAction
 */
var AllocateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    OrganizeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AllocateAction";
};
AllocateAction = stjs.extend(AllocateAction, OrganizeAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
