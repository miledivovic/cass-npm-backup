const schema = {};
schema.GovernmentBuilding = require("./GovernmentBuilding.js");
/**
 * Schema.org/Embassy
 * An embassy.
 *
 * @author schema.org
 * @class Embassy
 * @module org.schema
 * @extends GovernmentBuilding
 */
module.exports = class Embassy extends schema.GovernmentBuilding {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Embassy");
	}

}