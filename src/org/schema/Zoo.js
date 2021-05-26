const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Zoo
 * A zoo.
 *
 * @author schema.org
 * @class Zoo
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Zoo extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Zoo");
	}

}