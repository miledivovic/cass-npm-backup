/**
 *  Schema.org/AddAction
 *  The act of editing by adding an object to a collection.
 * 
 *  @author schema.org
 *  @class AddAction
 *  @module org.schema
 *  @extends UpdateAction
 */
var AddAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UpdateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AddAction";
};
AddAction = stjs.extend(AddAction, UpdateAction, [], null, {collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
