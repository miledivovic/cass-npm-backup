const schema = {};
schema.PlaceOfWorship = require("./PlaceOfWorship.js");
/**
 * Schema.org/HinduTemple
 * A Hindu temple.
 *
 * @author schema.org
 * @class HinduTemple
 * @module org.schema
 * @extends PlaceOfWorship
 */
module.exports = class HinduTemple extends schema.PlaceOfWorship {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HinduTemple");
	}

}