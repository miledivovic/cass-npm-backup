const schema = {};
schema.GovernmentBuilding = require("./GovernmentBuilding.js");
/**
 * Schema.org/CityHall
 * A city hall.
 *
 * @author schema.org
 * @class CityHall
 * @module org.schema
 * @extends GovernmentBuilding
 */
module.exports = class CityHall extends schema.GovernmentBuilding {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CityHall");
	}

}