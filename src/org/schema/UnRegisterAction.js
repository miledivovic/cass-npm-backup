/**
 *  Schema.org/UnRegisterAction
 *  The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[Leave]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 * 
 *  @author schema.org
 *  @class UnRegisterAction
 *  @module org.schema
 *  @extends InteractAction
 */
var UnRegisterAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InteractAction.call(this);
    this.context = "http://schema.org/";
    this.type = "UnRegisterAction";
};
UnRegisterAction = stjs.extend(UnRegisterAction, InteractAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
