const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/BeautySalon
 * Beauty salon.
 *
 * @author schema.org
 * @class BeautySalon
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class BeautySalon extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BeautySalon");
	}

}