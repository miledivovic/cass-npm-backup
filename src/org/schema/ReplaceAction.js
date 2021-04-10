/**
 *  Schema.org/ReplaceAction
 *  The act of editing a recipient by replacing an old object with a new object.
 * 
 *  @author schema.org
 *  @class ReplaceAction
 *  @module org.schema
 *  @extends UpdateAction
 */
var ReplaceAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    UpdateAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReplaceAction";
};
ReplaceAction = stjs.extend(ReplaceAction, UpdateAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/replacee
     *  A sub property of object. The object that is being replaced.
     * 
     *  @property replacee
     *  @type Thing
     */
    replacee = null;
    /**
     *  Schema.org/replacer
     *  A sub property of object. The object that replaces.
     * 
     *  @property replacer
     *  @type Thing
     */
    replacer = null;
}, {replacee: "Thing", replacer: "Thing", collection: "Thing", targetCollection: "Thing", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
