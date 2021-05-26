const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/InformAction
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 *
 * @author schema.org
 * @class InformAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class InformAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InformAction");
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