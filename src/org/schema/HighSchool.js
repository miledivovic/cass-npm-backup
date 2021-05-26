const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/HighSchool
 * A high school.
 *
 * @author schema.org
 * @class HighSchool
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class HighSchool extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HighSchool");
	}

}