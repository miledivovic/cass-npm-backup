/**
 * Schema.org/CollegeOrUniversity
 * A college, university, or other third-level educational institution.
 *
 * @author schema.org
 * @class CollegeOrUniversity
 * @module org.schema
 */
module.exports = class CollegeOrUniversity extends EcRemoteLinkedData {
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