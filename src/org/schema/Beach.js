const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Beach
 * Beach.
 *
 * @author schema.org
 * @class Beach
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Beach extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Beach");
	}

}