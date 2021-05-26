const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/BoatTerminal
 * A terminal for boats, ships, and other water vessels.
 *
 * @author schema.org
 * @class BoatTerminal
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class BoatTerminal extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoatTerminal");
	}

}