/**
 * Schema.org/EducationalAudience
 * An EducationalAudience.
 *
 * @author schema.org
 * @class EducationalAudience
 * @module org.schema
 */
module.exports = class EducationalAudience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "EducationalAudience");
	}
};
