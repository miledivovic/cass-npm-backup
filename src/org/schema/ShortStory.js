const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/ShortStory
 * Short story or tale. A brief work of literature, usually written in narrative prose.
 *
 * @author schema.org
 * @class ShortStory
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class ShortStory extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShortStory");
	}

}