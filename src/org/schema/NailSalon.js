const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/NailSalon
 * A nail salon.
 *
 * @author schema.org
 * @class NailSalon
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class NailSalon extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NailSalon");
	}

}