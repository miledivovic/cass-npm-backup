const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/ParkingFacility
 * A parking lot or other parking facility.
 *
 * @author schema.org
 * @class ParkingFacility
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class ParkingFacility extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ParkingFacility");
	}

}