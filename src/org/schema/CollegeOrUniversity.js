const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/CollegeOrUniversity
 * A college, university, or other third-level educational institution.
 *
 * @author schema.org
 * @class CollegeOrUniversity
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class CollegeOrUniversity extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CollegeOrUniversity");
	}

}