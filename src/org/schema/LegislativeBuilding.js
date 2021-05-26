const schema = {};
schema.GovernmentBuilding = require("./GovernmentBuilding.js");
/**
 * Schema.org/LegislativeBuilding
 * A legislative building&#x2014;for example, the state capitol.
 *
 * @author schema.org
 * @class LegislativeBuilding
 * @module org.schema
 * @extends GovernmentBuilding
 */
module.exports = class LegislativeBuilding extends schema.GovernmentBuilding {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegislativeBuilding");
	}

}