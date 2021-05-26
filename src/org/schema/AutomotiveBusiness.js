const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/AutomotiveBusiness
 * Car repair, sales, or parts.
 *
 * @author schema.org
 * @class AutomotiveBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class AutomotiveBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutomotiveBusiness");
	}

}