const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Aquarium
 * Aquarium.
 *
 * @author schema.org
 * @class Aquarium
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Aquarium extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Aquarium");
	}

}