const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/VisualArtsEvent
 * Event type: Visual arts event.
 *
 * @author schema.org
 * @class VisualArtsEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class VisualArtsEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VisualArtsEvent");
	}

}