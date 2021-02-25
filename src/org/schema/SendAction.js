/**
 *  Schema.org/SendAction
 *  The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 * 
 *  @author schema.org
 *  @class SendAction
 *  @module org.schema
 *  @extends TransferAction
 */
var SendAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "SendAction";
};
SendAction = stjs.extend(SendAction, TransferAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    prototype.recipient = null;
    /**
     *  Schema.org/deliveryMethod
     *  A sub property of instrument. The method of delivery.
     * 
     *  @property deliveryMethod
     *  @type DeliveryMethod
     */
    prototype.deliveryMethod = null;
}, {recipient: "Organization", deliveryMethod: "DeliveryMethod", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
