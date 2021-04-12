/**
 * Schema.org/MedicalAudience
 * Target audiences for medical web pages.
 *
 * @author schema.org
 * @class MedicalAudience
 * @module org.schema
 * @extends PeopleAudience
 */
public class MedicalAudience extends schema.PeopleAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalAudience";
	}

}