/**
 *  Schema.org/SearchAction
 *  The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 * 
 *  @author schema.org
 *  @class SearchAction
 *  @module org.schema
 *  @extends Action
 */
var SearchAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "SearchAction";
};
SearchAction = stjs.extend(SearchAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/query
     *  A sub property of instrument. The query used on this action.
     * 
     *  @property query
     *  @type Text
     */
    query = null;
}, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
