const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/SubwayStation
 * A subway station.
 *
 * @author schema.org
 * @class SubwayStation
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class SubwayStation extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SubwayStation");
	}

}