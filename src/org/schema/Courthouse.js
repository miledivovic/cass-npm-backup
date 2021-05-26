const schema = {};
schema.GovernmentBuilding = require("./GovernmentBuilding.js");
/**
 * Schema.org/Courthouse
 * A courthouse.
 *
 * @author schema.org
 * @class Courthouse
 * @module org.schema
 * @extends GovernmentBuilding
 */
module.exports = class Courthouse extends schema.GovernmentBuilding {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Courthouse");
	}

}