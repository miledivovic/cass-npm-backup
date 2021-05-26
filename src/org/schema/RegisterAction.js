const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/RegisterAction
 * The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 *
 * @author schema.org
 * @class RegisterAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class RegisterAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RegisterAction");
	}

}