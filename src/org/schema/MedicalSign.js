/**
 * Schema.org/MedicalSign
 * Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 *
 * @author schema.org
 * @class MedicalSign
 * @module org.schema
 */
module.exports = class MedicalSign extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalSign";
	}

}