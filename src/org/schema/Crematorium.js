const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Crematorium
 * A crematorium.
 *
 * @author schema.org
 * @class Crematorium
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Crematorium extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Crematorium");
	}

}