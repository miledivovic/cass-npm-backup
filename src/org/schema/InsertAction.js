/**
 *  Schema.org/InsertAction
 *  The act of adding at a specific location in an ordered collection.
 * 
 *  @author schema.org
 *  @class InsertAction
 *  @module org.schema
 *  @extends AddAction
 */
var InsertAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AddAction.call(this);
    this.context = "http://schema.org/";
    this.type = "InsertAction";
};
InsertAction = stjs.extend(InsertAction, AddAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/toLocation
     *  A sub property of location. The final location of the object or the agent after the action.
     * 
     *  @property toLocation
     *  @type Place
     */
    prototype.toLocation = null;
}, {toLocation: "Place", collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
