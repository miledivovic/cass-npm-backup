const schema = {};
schema.MedicalStudy = require("./MedicalStudy.js");
/**
 * Schema.org/MedicalObservationalStudy
 * An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
 *
 * @author schema.org
 * @class MedicalObservationalStudy
 * @module org.schema
 * @extends MedicalStudy
 */
module.exports = class MedicalObservationalStudy extends schema.MedicalStudy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalObservationalStudy");
	}

	/**
	 * Schema.org/studyDesign
	 * Specifics about the observational study design (enumerated).
	 *
	 * @property studyDesign
	 * @type MedicalObservationalStudyDesign
	 */
	studyDesign;

}