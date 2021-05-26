const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoDealer
 * An car dealership.
 *
 * @author schema.org
 * @class AutoDealer
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoDealer extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoDealer");
	}

}