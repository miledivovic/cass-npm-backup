const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/EntertainmentBusiness
 * A business providing entertainment.
 *
 * @author schema.org
 * @class EntertainmentBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class EntertainmentBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EntertainmentBusiness");
	}

}