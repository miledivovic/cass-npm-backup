/**
 *  Schema.org/DeactivateAction
 *  The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 * 
 *  @author schema.org
 *  @class DeactivateAction
 *  @module org.schema
 *  @extends ControlAction
 */
var DeactivateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ControlAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DeactivateAction";
};
DeactivateAction = stjs.extend(DeactivateAction, ControlAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
