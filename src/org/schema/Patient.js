/**
 * Schema.org/Patient
 * A patient is any person recipient of health care services.
 *
 * @author schema.org
 * @class Patient
 * @module org.schema
 * @extends MedicalAudience
 */
module.exports = class Patient extends schema.MedicalAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Patient";
	}

}