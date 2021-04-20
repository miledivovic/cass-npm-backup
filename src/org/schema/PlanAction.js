/**
 * Schema.org/PlanAction
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 *
 * @author schema.org
 * @class PlanAction
 * @module org.schema
 */
module.exports = class PlanAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PlanAction");
	}

}