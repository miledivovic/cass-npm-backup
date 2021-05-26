const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/LiteraryEvent
 * Event type: Literary event.
 *
 * @author schema.org
 * @class LiteraryEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class LiteraryEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LiteraryEvent");
	}

}