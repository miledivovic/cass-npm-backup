const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/GovernmentOffice
 * A government office&#x2014;for example, an IRS or DMV office.
 *
 * @author schema.org
 * @class GovernmentOffice
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class GovernmentOffice extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentOffice");
	}

}