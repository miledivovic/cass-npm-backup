const schema = {};
schema.PlaceOfWorship = require("./PlaceOfWorship.js");
/**
 * Schema.org/Mosque
 * A mosque.
 *
 * @author schema.org
 * @class Mosque
 * @module org.schema
 * @extends PlaceOfWorship
 */
module.exports = class Mosque extends schema.PlaceOfWorship {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Mosque");
	}

}