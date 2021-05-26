const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/RVPark
 * A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.
 *
 * @author schema.org
 * @class RVPark
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class RVPark extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RVPark");
	}

}