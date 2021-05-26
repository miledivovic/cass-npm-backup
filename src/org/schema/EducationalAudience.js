const schema = {};
schema.Audience = require("./Audience.js");
/**
 * Schema.org/EducationalAudience
 * An EducationalAudience.
 *
 * @author schema.org
 * @class EducationalAudience
 * @module org.schema
 * @extends Audience
 */
module.exports = class EducationalAudience extends schema.Audience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EducationalAudience");
	}

	/**
	 * Schema.org/educationalRole
	 * An educationalRole of an EducationalAudience.
	 *
	 * @property educationalRole
	 * @type Text
	 */
	educationalRole;

}