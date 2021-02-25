/**
 *  Schema.org/ConfirmAction
 *  The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 * 
 *  @author schema.org
 *  @class ConfirmAction
 *  @module org.schema
 *  @extends InformAction
 */
var ConfirmAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InformAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ConfirmAction";
};
ConfirmAction = stjs.extend(ConfirmAction, InformAction, [], null, {event: "SchemaEvent", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
