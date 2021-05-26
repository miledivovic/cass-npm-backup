const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/HealthAndBeautyBusiness
 * Health and beauty.
 *
 * @author schema.org
 * @class HealthAndBeautyBusiness
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class HealthAndBeautyBusiness extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthAndBeautyBusiness");
	}

}