const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoWash
 * A car wash business.
 *
 * @author schema.org
 * @class AutoWash
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoWash extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoWash");
	}

}