const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/GeneralContractor
 * A general contractor.
 *
 * @author schema.org
 * @class GeneralContractor
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class GeneralContractor extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GeneralContractor");
	}

}