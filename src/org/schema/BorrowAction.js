/**
 *  Schema.org/BorrowAction
 *  The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 * 
 *  @author schema.org
 *  @class BorrowAction
 *  @module org.schema
 *  @extends TransferAction
 */
var BorrowAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "BorrowAction";
};
BorrowAction = stjs.extend(BorrowAction, TransferAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/lender
     *  A sub property of participant. The person that lends the object being borrowed.
     * 
     *  @property lender
     *  @type Organization
     */
    prototype.lender = null;
}, {lender: "Organization", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
