/**
 * Schema.org/MedicalCode
 * A code for a medical entity.
 *
 * @author schema.org
 * @class MedicalCode
 * @module org.schema
 * @extends CategoryCode
 */
module.exports = class MedicalCode extends schema.CategoryCode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalCode";
	}

}