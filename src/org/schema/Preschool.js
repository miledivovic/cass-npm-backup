const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/Preschool
 * A preschool.
 *
 * @author schema.org
 * @class Preschool
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class Preschool extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Preschool");
	}

}