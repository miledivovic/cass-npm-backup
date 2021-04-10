/**
 *  Schema.org/UpdateAction
 *  The act of managing by changing/editing the state of the object.
 * 
 *  @author schema.org
 *  @class UpdateAction
 *  @module org.schema
 *  @extends Action
 */
var UpdateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "UpdateAction";
};
UpdateAction = stjs.extend(UpdateAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/collection
     *  A sub property of object. The collection target of the action.
     * 
     *  @property collection
     *  @type Thing
     */
    collection = null;
    /**
     *  Schema.org/targetCollection
     *  A sub property of object. The collection target of the action.
     * 
     *  @property targetCollection
     *  @type Thing
     */
    targetCollection = null;
}, {collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
