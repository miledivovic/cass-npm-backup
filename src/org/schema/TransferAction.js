/**
 *  Schema.org/TransferAction
 *  The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 * 
 *  @author schema.org
 *  @class TransferAction
 *  @module org.schema
 *  @extends Action
 */
var TransferAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "TransferAction";
};
TransferAction = stjs.extend(TransferAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/toLocation
     *  A sub property of location. The final location of the object or the agent after the action.
     * 
     *  @property toLocation
     *  @type Place
     */
    prototype.toLocation = null;
    /**
     *  Schema.org/fromLocation
     *  A sub property of location. The original location of the object or the agent before the action.
     * 
     *  @property fromLocation
     *  @type Place
     */
    prototype.fromLocation = null;
}, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
