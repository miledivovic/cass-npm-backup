const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/NGO
 * Organization: Non-governmental Organization.
 *
 * @author schema.org
 * @class NGO
 * @module org.schema
 * @extends Organization
 */
module.exports = class NGO extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NGO");
	}

}