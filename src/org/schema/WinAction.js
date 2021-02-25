/**
 *  Schema.org/WinAction
 *  The act of achieving victory in a competitive activity.
 * 
 *  @author schema.org
 *  @class WinAction
 *  @module org.schema
 *  @extends AchieveAction
 */
var WinAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AchieveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "WinAction";
};
WinAction = stjs.extend(WinAction, AchieveAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/loser
     *  A sub property of participant. The loser of the action.
     * 
     *  @property loser
     *  @type Person
     */
    prototype.loser = null;
}, {loser: "Person", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
