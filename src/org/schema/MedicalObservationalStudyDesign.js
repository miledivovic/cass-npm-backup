const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalObservationalStudyDesign
 * Design models for observational medical studies. Enumerated type.
 *
 * @author schema.org
 * @class MedicalObservationalStudyDesign
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalObservationalStudyDesign extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalObservationalStudyDesign");
	}

}