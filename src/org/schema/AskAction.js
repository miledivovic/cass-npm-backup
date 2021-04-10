/**
 *  Schema.org/AskAction
 *  The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 * 
 *  @author schema.org
 *  @class AskAction
 *  @module org.schema
 *  @extends CommunicateAction
 */
var AskAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CommunicateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "AskAction";
};
AskAction = stjs.extend(AskAction, CommunicateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/question
     *  A sub property of object. A question.
     * 
     *  @property question
     *  @type Question
     */
    question = null;
}, {question: "Question", about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
