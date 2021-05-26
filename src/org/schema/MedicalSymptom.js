const schema = {};
schema.MedicalSignOrSymptom = require("./MedicalSignOrSymptom.js");
/**
 * Schema.org/MedicalSymptom
 * Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain, or fatigue.
 *
 * @author schema.org
 * @class MedicalSymptom
 * @module org.schema
 * @extends MedicalSignOrSymptom
 */
module.exports = class MedicalSymptom extends schema.MedicalSignOrSymptom {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalSymptom");
	}

}