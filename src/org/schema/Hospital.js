/**
 * Schema.org/Hospital
 * A hospital.
 *
 * @author schema.org
 * @class Hospital
 * @module org.schema
 * @extends MedicalOrganization
 */
public class Hospital extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Hospital";
	}

}