/**
 * Schema.org/CollegeOrUniversity
 * A college, university, or other third-level educational institution.
 *
 * @author schema.org
 * @class CollegeOrUniversity
 * @module org.schema
 */
public class CollegeOrUniversity extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CollegeOrUniversity";
	}

}