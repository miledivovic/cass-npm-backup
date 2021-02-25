/**
 *  Schema.org/IgnoreAction
 *  The act of intentionally disregarding the object. An agent ignores an object.
 * 
 *  @author schema.org
 *  @class IgnoreAction
 *  @module org.schema
 *  @extends AssessAction
 */
var IgnoreAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AssessAction.call(this);
    this.context = "http://schema.org/";
    this.type = "IgnoreAction";
};
IgnoreAction = stjs.extend(IgnoreAction, AssessAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
