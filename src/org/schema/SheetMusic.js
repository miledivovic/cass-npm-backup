const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/SheetMusic
 * Printed music, as opposed to performed or recorded music.
 *
 * @author schema.org
 * @class SheetMusic
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class SheetMusic extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SheetMusic");
	}

}