/**
 *  Schema.org/DrawAction
 *  The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.
 * 
 *  @author schema.org
 *  @class DrawAction
 *  @module org.schema
 *  @extends CreateAction
 */
var DrawAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DrawAction";
};
DrawAction = stjs.extend(DrawAction, CreateAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
