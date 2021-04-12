/**
 * Schema.org/MedicalBusiness
 * A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals.
 *
 * @author schema.org
 * @class MedicalBusiness
 * @module org.schema
 */
module.exports = class MedicalBusiness extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalBusiness";
	}

}