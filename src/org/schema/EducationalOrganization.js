const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/EducationalOrganization
 * An educational organization.
 *
 * @author schema.org
 * @class EducationalOrganization
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class EducationalOrganization extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EducationalOrganization");
	}

	/**
	 * Schema.org/alumni
	 * Alumni of an organization.
	 *
	 * @property alumni
	 * @type Person
	 */
	alumni;

}