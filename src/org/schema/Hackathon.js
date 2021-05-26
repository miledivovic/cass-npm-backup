const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/Hackathon
 * A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event.
 *
 * @author schema.org
 * @class Hackathon
 * @module org.schema
 * @extends Event
 */
module.exports = class Hackathon extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hackathon");
	}

}