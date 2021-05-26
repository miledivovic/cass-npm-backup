const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Park
 * A park.
 *
 * @author schema.org
 * @class Park
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Park extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Park");
	}

}