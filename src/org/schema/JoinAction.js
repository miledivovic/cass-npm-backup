/**
 *  Schema.org/JoinAction
 *  An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 * 
 *  @author schema.org
 *  @class JoinAction
 *  @module org.schema
 *  @extends InteractAction
 */
var JoinAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InteractAction.call(this);
    this.context = "http://schema.org/";
    this.type = "JoinAction";
};
JoinAction = stjs.extend(JoinAction, InteractAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/event
     *  Upcoming or past event associated with this place, organization, or action.
     * 
     *  @property event
     *  @type SchemaEvent
     */
    prototype.event = null;
}, {event: "SchemaEvent", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
