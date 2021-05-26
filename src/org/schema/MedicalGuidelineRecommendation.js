const schema = {};
schema.MedicalGuideline = require("./MedicalGuideline.js");
/**
 * Schema.org/MedicalGuidelineRecommendation
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 *
 * @author schema.org
 * @class MedicalGuidelineRecommendation
 * @module org.schema
 * @extends MedicalGuideline
 */
module.exports = class MedicalGuidelineRecommendation extends schema.MedicalGuideline {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalGuidelineRecommendation");
	}

	/**
	 * Schema.org/recommendationStrength
	 * Strength of the guideline's recommendation (e.g. 'class I').
	 *
	 * @property recommendationStrength
	 * @type Text
	 */
	recommendationStrength;

}