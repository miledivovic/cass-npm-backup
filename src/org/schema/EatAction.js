/**
 *  Schema.org/EatAction
 *  The act of swallowing solid objects.
 * 
 *  @author schema.org
 *  @class EatAction
 *  @module org.schema
 *  @extends ConsumeAction
 */
var EatAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ConsumeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "EatAction";
};
EatAction = stjs.extend(EatAction, ConsumeAction, [], null, {expectsAcceptanceOf: "Offer", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
