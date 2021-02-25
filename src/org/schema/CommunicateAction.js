/**
 *  Schema.org/CommunicateAction
 *  The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 * 
 *  @author schema.org
 *  @class CommunicateAction
 *  @module org.schema
 *  @extends InteractAction
 */
var CommunicateAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    InteractAction.call(this);
    this.context = "http://schema.org/";
    this.type = "CommunicateAction";
};
CommunicateAction = stjs.extend(CommunicateAction, InteractAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/about
     *  The subject matter of the content.
     * 
     *  @property about
     *  @type Thing
     */
    prototype.about = null;
    /**
     *  Schema.org/recipient
     *  A sub property of participant. The participant who is at the receiving end of the action.
     * 
     *  @property recipient
     *  @type Organization
     */
    prototype.recipient = null;
    /**
     *  Schema.org/inLanguage
     *  The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * 
     *  @property inLanguage
     *  @type Language
     */
    prototype.inLanguage = null;
    /**
     *  Schema.org/language
     *  A sub property of instrument. The language used on this action.
     * 
     *  @property language
     *  @type Language
     */
    prototype.language = null;
}, {about: "Thing", recipient: "Organization", inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
