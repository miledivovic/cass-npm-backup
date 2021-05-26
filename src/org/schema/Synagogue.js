const schema = {};
schema.PlaceOfWorship = require("./PlaceOfWorship.js");
/**
 * Schema.org/Synagogue
 * A synagogue.
 *
 * @author schema.org
 * @class Synagogue
 * @module org.schema
 * @extends PlaceOfWorship
 */
module.exports = class Synagogue extends schema.PlaceOfWorship {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Synagogue");
	}

}