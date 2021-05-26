const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/ExhibitionEvent
 * Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
 *
 * @author schema.org
 * @class ExhibitionEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class ExhibitionEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExhibitionEvent");
	}

}