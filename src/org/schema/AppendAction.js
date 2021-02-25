/**
 *  Schema.org/AppendAction
 *  The act of inserting at the end if an ordered collection.
 * 
 *  @author schema.org
 *  @class AppendAction
 *  @module org.schema
 *  @extends InsertAction
 */
var AppendAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InsertAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AppendAction";
};
AppendAction = stjs.extend(AppendAction, InsertAction, [], null, {toLocation: "Place", collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
