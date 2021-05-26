const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/HousePainter
 * A house painting service.
 *
 * @author schema.org
 * @class HousePainter
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class HousePainter extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HousePainter");
	}

}