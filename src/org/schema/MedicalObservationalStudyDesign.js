/**
 * Schema.org/MedicalObservationalStudyDesign
 * Design models for observational medical studies. Enumerated type.
 *
 * @author schema.org
 * @class MedicalObservationalStudyDesign
 * @module org.schema
 */
module.exports = class MedicalObservationalStudyDesign extends
	EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"MedicalObservationalStudyDesign"
		);
	}
};
