const schema = {};
schema.CreativeWorkSeason = require("./CreativeWorkSeason.js");
/**
 * Schema.org/RadioSeason
 * Season dedicated to radio broadcast and associated online delivery.
 *
 * @author schema.org
 * @class RadioSeason
 * @module org.schema
 * @extends CreativeWorkSeason
 */
module.exports = class RadioSeason extends schema.CreativeWorkSeason {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioSeason");
	}

}