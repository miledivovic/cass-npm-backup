/**
 *  Schema.org/ReserveAction
 *  Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]</a>: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 * 
 *  @author schema.org
 *  @class ReserveAction
 *  @module org.schema
 *  @extends PlanAction
 */
var ReserveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PlanAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ReserveAction";
};
ReserveAction = stjs.extend(ReserveAction, PlanAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
