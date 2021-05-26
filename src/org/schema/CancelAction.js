const schema = {};
schema.PlanAction = require("./PlanAction.js");
/**
 * Schema.org/CancelAction
 * The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction.
 *
 * @author schema.org
 * @class CancelAction
 * @module org.schema
 * @extends PlanAction
 */
module.exports = class CancelAction extends schema.PlanAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CancelAction");
	}

}