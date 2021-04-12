/**
 * Schema.org/Physician
 * A doctor's office.
 *
 * @author schema.org
 * @class Physician
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Physician extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Physician";
	}

}