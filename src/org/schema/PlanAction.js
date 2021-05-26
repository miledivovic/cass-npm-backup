const schema = {};
schema.OrganizeAction = require("./OrganizeAction.js");
/**
 * Schema.org/PlanAction
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 *
 * @author schema.org
 * @class PlanAction
 * @module org.schema
 * @extends OrganizeAction
 */
module.exports = class PlanAction extends schema.OrganizeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PlanAction");
	}

	/**
	 * Schema.org/scheduledTime
	 * The time the object is scheduled to.
	 *
	 * @property scheduledTime
	 * @type DateTime
	 */
	scheduledTime;

}