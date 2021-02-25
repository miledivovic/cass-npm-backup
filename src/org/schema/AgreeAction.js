/**
 *  Schema.org/AgreeAction
 *  The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
 * 
 *  @author schema.org
 *  @class AgreeAction
 *  @module org.schema
 *  @extends ReactAction
 */
var AgreeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ReactAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AgreeAction";
};
AgreeAction = stjs.extend(AgreeAction, ReactAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
