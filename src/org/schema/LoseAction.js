/**
 *  Schema.org/LoseAction
 *  The act of being defeated in a competitive activity.
 * 
 *  @author schema.org
 *  @class LoseAction
 *  @module org.schema
 *  @extends AchieveAction
 */
var LoseAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    AchieveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "LoseAction";
};
LoseAction = stjs.extend(LoseAction, AchieveAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/winner
     *  A sub property of participant. The winner of the action.
     * 
     *  @property winner
     *  @type Person
     */
    winner = null;
}, {winner: "Person", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
