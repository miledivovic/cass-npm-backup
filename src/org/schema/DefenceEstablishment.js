const schema = {};
schema.GovernmentBuilding = require("./GovernmentBuilding.js");
/**
 * Schema.org/DefenceEstablishment
 * A defence establishment, such as an army or navy base.
 *
 * @author schema.org
 * @class DefenceEstablishment
 * @module org.schema
 * @extends GovernmentBuilding
 */
module.exports = class DefenceEstablishment extends schema.GovernmentBuilding {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DefenceEstablishment");
	}

}