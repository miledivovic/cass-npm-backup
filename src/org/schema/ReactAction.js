/**
 *  Schema.org/ReactAction
 *  The act of responding instinctively and emotionally to an object, expressing a sentiment.
 * 
 *  @author schema.org
 *  @class ReactAction
 *  @module org.schema
 *  @extends AssessAction
 */
var ReactAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AssessAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReactAction";
};
ReactAction = stjs.extend(ReactAction, AssessAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
