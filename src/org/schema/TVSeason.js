global.schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/TVSeason
 * Season dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeason
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class TVSeason extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVSeason");
	}

}