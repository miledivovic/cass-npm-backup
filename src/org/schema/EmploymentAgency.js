const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/EmploymentAgency
 * An employment agency.
 *
 * @author schema.org
 * @class EmploymentAgency
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class EmploymentAgency extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmploymentAgency");
	}

}