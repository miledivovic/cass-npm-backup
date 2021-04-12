/**
 * Schema.org/Pharmacy
 * A pharmacy or drugstore.
 *
 * @author schema.org
 * @class Pharmacy
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Pharmacy extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Pharmacy";
	}

}