const schema = {};
schema.PlanAction = require("./PlanAction.js");
/**
 * Schema.org/ScheduleAction
 * Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 *
 * @author schema.org
 * @class ScheduleAction
 * @module org.schema
 * @extends PlanAction
 */
module.exports = class ScheduleAction extends schema.PlanAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ScheduleAction");
	}

}