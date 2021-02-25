/**
 *  Schema.org/DepartAction
 *  The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 * 
 *  @author schema.org
 *  @class DepartAction
 *  @module org.schema
 *  @extends MoveAction
 */
var DepartAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MoveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DepartAction";
};
DepartAction = stjs.extend(DepartAction, MoveAction, [], null, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
