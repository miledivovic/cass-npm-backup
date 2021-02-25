/**
 *  Schema.org/DeleteAction
 *  The act of editing a recipient by removing one of its objects.
 * 
 *  @author schema.org
 *  @class DeleteAction
 *  @module org.schema
 *  @extends UpdateAction
 */
var DeleteAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UpdateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DeleteAction";
};
DeleteAction = stjs.extend(DeleteAction, UpdateAction, [], null, {collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
