const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Museum
 * A museum.
 *
 * @author schema.org
 * @class Museum
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Museum extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Museum");
	}

}