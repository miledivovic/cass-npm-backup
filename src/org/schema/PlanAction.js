/**
 *  Schema.org/PlanAction
 *  The act of planning the execution of an event/task/action/reservation/plan to a future date.
 * 
 *  @author schema.org
 *  @class PlanAction
 *  @module org.schema
 *  @extends OrganizeAction
 */
var PlanAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    OrganizeAction.call(this);
    this.context = "http://schema.org/";
    this.type = "PlanAction";
};
PlanAction = stjs.extend(PlanAction, OrganizeAction, [], function(constructor, prototype) {
    /**
     *  Schema.org/scheduledTime
     *  The time the object is scheduled to.
     * 
     *  @property scheduledTime
     *  @type DateTime
     */
    prototype.scheduledTime = null;
}, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
