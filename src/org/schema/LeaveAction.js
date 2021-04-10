/**
 *  Schema.org/LeaveAction
 *  An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 * 
 *  @author schema.org
 *  @class LeaveAction
 *  @module org.schema
 *  @extends InteractAction
 */
var LeaveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InteractAction.call(this);
    this.context = "http://schema.org/";
    this.type = "LeaveAction";
};
LeaveAction = stjs.extend(LeaveAction, InteractAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    event = null;
}, {event: "SchemaEvent", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
