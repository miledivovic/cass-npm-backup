/**
 *  Schema.org/MarryAction
 *  The act of marrying a person.
 * 
 *  @author schema.org
 *  @class MarryAction
 *  @module org.schema
 *  @extends InteractAction
 */
var MarryAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InteractAction.call(this);
    this.context = "http://schema.org/";
    this.type = "MarryAction";
};
MarryAction = stjs.extend(MarryAction, InteractAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
