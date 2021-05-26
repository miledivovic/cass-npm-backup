const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/InviteAction
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 *
 * @author schema.org
 * @class InviteAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class InviteAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InviteAction");
	}

	/**
	 * Schema.org/event
	 * Upcoming or past event associated with this place, organization, or action.
	 *
	 * @property event
	 * @type Event
	 */
	event;

}