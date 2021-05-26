const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/Festival
 * Event type: Festival.
 *
 * @author schema.org
 * @class Festival
 * @module org.schema
 * @extends Event
 */
module.exports = class Festival extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Festival");
	}

}