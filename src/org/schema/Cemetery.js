const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Cemetery
 * A graveyard.
 *
 * @author schema.org
 * @class Cemetery
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Cemetery extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Cemetery");
	}

}