const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/HealthClub
 * A health club.
 *
 * @author schema.org
 * @class HealthClub
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class HealthClub extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthClub");
	}

}