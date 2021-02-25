/**
 *  Schema.org/PaintAction
 *  The act of producing a painting, typically with paint and canvas as instruments.
 * 
 *  @author schema.org
 *  @class PaintAction
 *  @module org.schema
 *  @extends CreateAction
 */
var PaintAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "PaintAction";
};
PaintAction = stjs.extend(PaintAction, CreateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
