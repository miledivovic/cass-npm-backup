/**
 *  Schema.org/ResumeAction
 *  The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 * 
 *  @author schema.org
 *  @class ResumeAction
 *  @module org.schema
 *  @extends ControlAction
 */
var ResumeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ControlAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ResumeAction";
};
ResumeAction = stjs.extend(ResumeAction, ControlAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
