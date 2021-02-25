/**
 *  Schema.org/LendAction
 *  The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 * 
 *  @author schema.org
 *  @class LendAction
 *  @module org.schema
 *  @extends TransferAction
 */
var LendAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    TransferAction.call(this);
    this.context = "http://schema.org/";
    this.type = "LendAction";
};
LendAction = stjs.extend(LendAction, TransferAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/borrower
     *  A sub property of participant. The person that borrows the object being lent.
     * 
     *  @property borrower
     *  @type Person
     */
    prototype.borrower = null;
}, {borrower: "Person", toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
