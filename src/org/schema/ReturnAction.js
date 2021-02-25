/**
 *  Schema.org/ReturnAction
 *  The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 * 
 *  @author schema.org
 *  @class ReturnAction
 *  @module org.schema
 *  @extends TransferAction
 */
var ReturnAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReturnAction";
};
ReturnAction = stjs.extend(ReturnAction, TransferAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    prototype.recipient = null;
}, {recipient: "Organization", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
