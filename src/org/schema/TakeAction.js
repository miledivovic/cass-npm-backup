/**
 *  Schema.org/TakeAction
 *  The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 * 
 *  @author schema.org
 *  @class TakeAction
 *  @module org.schema
 *  @extends TransferAction
 */
var TakeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "TakeAction";
};
TakeAction = stjs.extend(TakeAction, TransferAction, [], null, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
