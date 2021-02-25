/**
 *  Schema.org/DislikeAction
 *  The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 * 
 *  @author schema.org
 *  @class DislikeAction
 *  @module org.schema
 *  @extends ReactAction
 */
var DislikeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ReactAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DislikeAction";
};
DislikeAction = stjs.extend(DislikeAction, ReactAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
