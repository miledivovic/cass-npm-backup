/**
 *  Schema.org/ReplyAction
 *  The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 * 
 *  @author schema.org
 *  @class ReplyAction
 *  @module org.schema
 *  @extends CommunicateAction
 */
var ReplyAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CommunicateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReplyAction";
};
ReplyAction = stjs.extend(ReplyAction, CommunicateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/resultComment
     *  A sub property of result. The Comment created or sent as a result of this action.
     * 
     *  @property resultComment
     *  @type Comment
     */
    resultComment = null;
}, {resultComment: "Comment", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
