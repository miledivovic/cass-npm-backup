const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Code
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 * @author schema.org
 * @class Code
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Code extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Code");
	}

}