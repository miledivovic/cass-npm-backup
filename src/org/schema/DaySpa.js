const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/DaySpa
 * A day spa.
 *
 * @author schema.org
 * @class DaySpa
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class DaySpa extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DaySpa");
	}

}