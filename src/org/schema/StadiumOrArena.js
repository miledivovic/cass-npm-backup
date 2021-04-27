global.schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/StadiumOrArena
 * A stadium.
 *
 * @author schema.org
 * @class StadiumOrArena
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class StadiumOrArena extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "StadiumOrArena");
	}
};
