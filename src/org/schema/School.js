const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/School
 * A school.
 *
 * @author schema.org
 * @class School
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class School extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","School");
	}

}