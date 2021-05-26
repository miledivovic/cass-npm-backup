const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/HVACBusiness
 * A business that provide Heating, Ventilation and Air Conditioning services.
 *
 * @author schema.org
 * @class HVACBusiness
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class HVACBusiness extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HVACBusiness");
	}

}