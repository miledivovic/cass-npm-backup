/**
 *  Schema.org/WearAction
 *  The act of dressing oneself in clothing.
 * 
 *  @author schema.org
 *  @class WearAction
 *  @module org.schema
 *  @extends UseAction
 */
var WearAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UseAction.call(this);
    this.context = "http://schema.org/";
    this.type = "WearAction";
};
WearAction = stjs.extend(WearAction, UseAction, [], null, {expectsAcceptanceOf: "Offer", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
