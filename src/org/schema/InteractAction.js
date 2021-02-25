/**
 *  Schema.org/InteractAction
 *  The act of interacting with another person or organization.
 * 
 *  @author schema.org
 *  @class InteractAction
 *  @module org.schema
 *  @extends Action
 */
var InteractAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "InteractAction";
};
InteractAction = stjs.extend(InteractAction, Action, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
