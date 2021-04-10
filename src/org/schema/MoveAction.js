/**
 *  Schema.org/MoveAction
 *  The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 * 
 *  @author schema.org
 *  @class MoveAction
 *  @module org.schema
 *  @extends Action
 */
var MoveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "MoveAction";
};
MoveAction = stjs.extend(MoveAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/toLocation
     *  A sub property of location. The final location of the object or the agent after the action.
     * 
     *  @property toLocation
     *  @type Place
     */
    toLocation = null;
    /**
     *  Schema.org/fromLocation
     *  A sub property of location. The original location of the object or the agent before the action.
     * 
     *  @property fromLocation
     *  @type Place
     */
    fromLocation = null;
}, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
