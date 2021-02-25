/**
 *  Schema.org/ActivateAction
 *  The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 * 
 *  @author schema.org
 *  @class ActivateAction
 *  @module org.schema
 *  @extends ControlAction
 */
var ActivateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ControlAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ActivateAction";
};
ActivateAction = stjs.extend(ActivateAction, ControlAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
