/**
 *  Schema.org/InviteAction
 *  The act of asking someone to attend an event. Reciprocal of RsvpAction.
 * 
 *  @author schema.org
 *  @class InviteAction
 *  @module org.schema
 *  @extends CommunicateAction
 */
var InviteAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CommunicateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "InviteAction";
};
InviteAction = stjs.extend(InviteAction, CommunicateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    prototype.event = null;
}, {event: "SchemaEvent", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
