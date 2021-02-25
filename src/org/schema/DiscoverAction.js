/**
 *  Schema.org/DiscoverAction
 *  The act of discovering/finding an object.
 * 
 *  @author schema.org
 *  @class DiscoverAction
 *  @module org.schema
 *  @extends FindAction
 */
var DiscoverAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FindAction.call(this);
    this.context = "http://schema.org/";
    this.type = "DiscoverAction";
};
DiscoverAction = stjs.extend(DiscoverAction, FindAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
