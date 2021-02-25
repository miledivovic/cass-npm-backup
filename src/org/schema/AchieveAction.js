/**
 *  Schema.org/AchieveAction
 *  The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.
 * 
 *  @author schema.org
 *  @class AchieveAction
 *  @module org.schema
 *  @extends Action
 */
var AchieveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "AchieveAction";
};
AchieveAction = stjs.extend(AchieveAction, Action, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
