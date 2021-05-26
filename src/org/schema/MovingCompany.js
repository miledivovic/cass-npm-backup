const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/MovingCompany
 * A moving company.
 *
 * @author schema.org
 * @class MovingCompany
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class MovingCompany extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MovingCompany");
	}

}