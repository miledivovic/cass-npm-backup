/**
 *  Schema.org/CheckAction
 *  An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
 * 
 *  @author schema.org
 *  @class CheckAction
 *  @module org.schema
 *  @extends FindAction
 */
var CheckAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FindAction.call(this);
    this.context = "http://schema.org/";
    this.type = "CheckAction";
};
CheckAction = stjs.extend(CheckAction, FindAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
