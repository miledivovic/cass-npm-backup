/**
 *  Schema.org/ReceiveAction
 *  The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 * 
 *  @author schema.org
 *  @class ReceiveAction
 *  @module org.schema
 *  @extends TransferAction
 */
var ReceiveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReceiveAction";
};
ReceiveAction = stjs.extend(ReceiveAction, TransferAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/deliveryMethod
     *  A sub property of instrument. The method of delivery.
     * 
     *  @property deliveryMethod
     *  @type DeliveryMethod
     */
    prototype.deliveryMethod = null;
    /**
     *  Schema.org/sender
     *  A sub property of participant. The participant who is at the sending end of the action.
     * 
     *  @property sender
     *  @type Audience
     */
    prototype.sender = null;
}, {deliveryMethod: "DeliveryMethod", sender: "Audience", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
