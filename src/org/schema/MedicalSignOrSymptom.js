const schema = {};
schema.MedicalCondition = require("./MedicalCondition.js");
/**
 * Schema.org/MedicalSignOrSymptom
 * Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 *
 * @author schema.org
 * @class MedicalSignOrSymptom
 * @module org.schema
 * @extends MedicalCondition
 */
module.exports = class MedicalSignOrSymptom extends schema.MedicalCondition {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalSignOrSymptom");
	}

	/**
	 * Schema.org/possibleTreatment
	 * A possible treatment to address this condition, sign or symptom.
	 *
	 * @property possibleTreatment
	 * @type MedicalTherapy
	 */
	possibleTreatment;

}