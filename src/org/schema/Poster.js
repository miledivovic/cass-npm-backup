const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Poster
 * A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something.
 *
 * @author schema.org
 * @class Poster
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Poster extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Poster");
	}

}