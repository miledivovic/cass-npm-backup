/**
 * Schema.org/MedicalGuidelineContraindication
 * A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.
 *
 * @author schema.org
 * @class MedicalGuidelineContraindication
 * @module org.schema
 */
module.exports = class MedicalGuidelineContraindication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalGuidelineContraindication";
	}

}