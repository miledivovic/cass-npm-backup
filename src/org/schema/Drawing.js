const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Drawing
 * A picture or diagram made with a pencil, pen, or crayon rather than paint.
 *
 * @author schema.org
 * @class Drawing
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Drawing extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Drawing");
	}

}