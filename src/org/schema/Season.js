const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Season
 * A media season e.g. tv, radio, video game etc.
 *
 * @author schema.org
 * @class Season
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Season extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Season");
	}

}