const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/Plumber
 * A plumbing service.
 *
 * @author schema.org
 * @class Plumber
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class Plumber extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Plumber");
	}

}