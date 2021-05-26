const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/GovernmentBuilding
 * A government building.
 *
 * @author schema.org
 * @class GovernmentBuilding
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class GovernmentBuilding extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentBuilding");
	}

}