const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Photograph
 * A photograph.
 *
 * @author schema.org
 * @class Photograph
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Photograph extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Photograph");
	}

}