const schema = {};
schema.MedicalGuideline = require("./MedicalGuideline.js");
/**
 * Schema.org/MedicalGuidelineContraindication
 * A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.
 *
 * @author schema.org
 * @class MedicalGuidelineContraindication
 * @module org.schema
 * @extends MedicalGuideline
 */
module.exports = class MedicalGuidelineContraindication extends schema.MedicalGuideline {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalGuidelineContraindication");
	}

}