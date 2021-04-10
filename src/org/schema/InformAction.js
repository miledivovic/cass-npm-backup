/**
 *  Schema.org/InformAction
 *  The act of notifying someone of information pertinent to them, with no expectation of a response.
 * 
 *  @author schema.org
 *  @class InformAction
 *  @module org.schema
 *  @extends CommunicateAction
 */
var InformAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CommunicateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "InformAction";
};
InformAction = stjs.extend(InformAction, CommunicateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    event = null;
}, {event: "SchemaEvent", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
