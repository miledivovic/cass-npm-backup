/**
 *  Schema.org/ChooseAction
 *  The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 * 
 *  @author schema.org
 *  @class ChooseAction
 *  @module org.schema
 *  @extends AssessAction
 */
var ChooseAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AssessAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ChooseAction";
};
ChooseAction = stjs.extend(ChooseAction, AssessAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/actionOption
     *  A sub property of object. The options subject to this action.
     * 
     *  @property actionOption
     *  @type Text
     */
    actionOption = null;
    /**
     *  Schema.org/option
     *  A sub property of object. The options subject to this action.
     * 
     *  @property option
     *  @type Text
     */
    option = null;
}, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
