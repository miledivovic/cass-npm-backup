/**
 *  Schema.org/VoteAction
 *  The act of expressing a preference from a fixed/finite/structured set of choices/options.
 * 
 *  @author schema.org
 *  @class VoteAction
 *  @module org.schema
 *  @extends ChooseAction
 */
var VoteAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ChooseAction.call(this);
    this.context = "http://schema.org/";
    this.type = "VoteAction";
};
VoteAction = stjs.extend(VoteAction, ChooseAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/candidate
     *  A sub property of object. The candidate subject of this action.
     * 
     *  @property candidate
     *  @type Person
     */
    candidate = null;
}, {candidate: "Person", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
