/**
 *  Schema.org/AcceptAction
 *  The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
 * 
 *  @author schema.org
 *  @class AcceptAction
 *  @module org.schema
 *  @extends AllocateAction
 */
var AcceptAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AllocateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AcceptAction";
};
AcceptAction = stjs.extend(AcceptAction, AllocateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
