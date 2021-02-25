/**
 *  Schema.org/WriteAction
 *  The act of authoring written creative content.
 * 
 *  @author schema.org
 *  @class WriteAction
 *  @module org.schema
 *  @extends CreateAction
 */
var WriteAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "WriteAction";
};
WriteAction = stjs.extend(WriteAction, CreateAction, [], function(constructor, prototype) {
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
}, {inLanguage: "Language", language: "Language", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
