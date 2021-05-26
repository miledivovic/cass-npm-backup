const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoRepair
 * Car repair business.
 *
 * @author schema.org
 * @class AutoRepair
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoRepair extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoRepair");
	}

}