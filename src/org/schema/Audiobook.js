global.schema.AudioObject = require("./AudioObject.js");
/**
 * Schema.org/Audiobook
 * An audiobook.
 *
 * @author schema.org
 * @class Audiobook
 * @module org.schema
 * @extends AudioObject
 */
module.exports = class Audiobook extends schema.AudioObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Audiobook");
	}
};
