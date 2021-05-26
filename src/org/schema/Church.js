const schema = {};
schema.PlaceOfWorship = require("./PlaceOfWorship.js");
/**
 * Schema.org/Church
 * A church.
 *
 * @author schema.org
 * @class Church
 * @module org.schema
 * @extends PlaceOfWorship
 */
module.exports = class Church extends schema.PlaceOfWorship {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Church");
	}

}