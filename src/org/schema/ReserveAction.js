const schema = {};
schema.PlanAction = require("./PlanAction.js");
/**
 * Schema.org/ReserveAction
 * Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 *
 * @author schema.org
 * @class ReserveAction
 * @module org.schema
 * @extends PlanAction
 */
module.exports = class ReserveAction extends schema.PlanAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReserveAction");
	}

}