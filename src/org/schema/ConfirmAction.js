const schema = {};
schema.InformAction = require("./InformAction.js");
/**
 * Schema.org/ConfirmAction
 * The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 *
 * @author schema.org
 * @class ConfirmAction
 * @module org.schema
 * @extends InformAction
 */
module.exports = class ConfirmAction extends schema.InformAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ConfirmAction");
	}

}