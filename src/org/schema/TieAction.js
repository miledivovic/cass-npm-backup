/**
 *  Schema.org/TieAction
 *  The act of reaching a draw in a competitive activity.
 * 
 *  @author schema.org
 *  @class TieAction
 *  @module org.schema
 *  @extends AchieveAction
 */
var TieAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AchieveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "TieAction";
};
TieAction = stjs.extend(TieAction, AchieveAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
