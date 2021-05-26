const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/ChildrensEvent
 * Event type: Children's event.
 *
 * @author schema.org
 * @class ChildrensEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class ChildrensEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ChildrensEvent");
	}

}