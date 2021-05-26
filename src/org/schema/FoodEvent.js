const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/FoodEvent
 * Event type: Food event.
 *
 * @author schema.org
 * @class FoodEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class FoodEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FoodEvent");
	}

}