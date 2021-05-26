const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/HairSalon
 * A hair salon.
 *
 * @author schema.org
 * @class HairSalon
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class HairSalon extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HairSalon");
	}

}