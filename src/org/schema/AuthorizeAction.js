/**
 *  Schema.org/AuthorizeAction
 *  The act of granting permission to an object.
 * 
 *  @author schema.org
 *  @class AuthorizeAction
 *  @module org.schema
 *  @extends AllocateAction
 */
var AuthorizeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AllocateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AuthorizeAction";
};
AuthorizeAction = stjs.extend(AuthorizeAction, AllocateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    prototype.recipient = null;
}, {recipient: "Organization", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
