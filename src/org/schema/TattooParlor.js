const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/TattooParlor
 * A tattoo parlor.
 *
 * @author schema.org
 * @class TattooParlor
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class TattooParlor extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TattooParlor");
	}

}