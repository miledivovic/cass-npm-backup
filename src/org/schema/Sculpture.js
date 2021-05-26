const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Sculpture
 * A piece of sculpture.
 *
 * @author schema.org
 * @class Sculpture
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Sculpture extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Sculpture");
	}

}