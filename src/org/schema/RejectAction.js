/**
 *  Schema.org/RejectAction
 *  The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
 * 
 *  @author schema.org
 *  @class RejectAction
 *  @module org.schema
 *  @extends AllocateAction
 */
var RejectAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AllocateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "RejectAction";
};
RejectAction = stjs.extend(RejectAction, AllocateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
