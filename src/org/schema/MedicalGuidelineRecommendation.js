/**
 * Schema.org/MedicalGuidelineRecommendation
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 *
 * @author schema.org
 * @class MedicalGuidelineRecommendation
 * @module org.schema
 */
module.exports = class MedicalGuidelineRecommendation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalGuidelineRecommendation";
	}

}