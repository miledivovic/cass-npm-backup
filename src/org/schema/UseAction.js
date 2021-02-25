/**
 *  Schema.org/UseAction
 *  The act of applying an object to its intended purpose.
 * 
 *  @author schema.org
 *  @class UseAction
 *  @module org.schema
 *  @extends ConsumeAction
 */
var UseAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ConsumeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "UseAction";
};
UseAction = stjs.extend(UseAction, ConsumeAction, [], null, {expectsAcceptanceOf: "Offer", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
