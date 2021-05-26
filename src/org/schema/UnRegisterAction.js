const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/UnRegisterAction
 * The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 *
 * @author schema.org
 * @class UnRegisterAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class UnRegisterAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UnRegisterAction");
	}

}