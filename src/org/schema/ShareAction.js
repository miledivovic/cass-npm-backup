/**
 *  Schema.org/ShareAction
 *  The act of distributing content to people for their amusement or edification.
 * 
 *  @author schema.org
 *  @class ShareAction
 *  @module org.schema
 *  @extends CommunicateAction
 */
var ShareAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CommunicateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ShareAction";
};
ShareAction = stjs.extend(ShareAction, CommunicateAction, [], null, {about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
