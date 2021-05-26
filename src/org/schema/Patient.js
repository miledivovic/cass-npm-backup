const schema = {};
schema.MedicalAudience = require("./MedicalAudience.js");
/**
 * Schema.org/Patient
 * A patient is any person recipient of health care services.
 *
 * @author schema.org
 * @class Patient
 * @module org.schema
 * @extends MedicalAudience
 */
module.exports = class Patient extends schema.MedicalAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Patient");
	}

	/**
	 * Schema.org/healthCondition
	 * Specifying the health condition(s) of a patient, medical study, or other target audience.
	 *
	 * @property healthCondition
	 * @type MedicalCondition
	 */
	healthCondition;

	/**
	 * Schema.org/drug
	 * Specifying a drug or medicine used in a medication procedure.
	 *
	 * @property drug
	 * @type Drug
	 */
	drug;

	/**
	 * Schema.org/diagnosis
	 * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
	 *
	 * @property diagnosis
	 * @type MedicalCondition
	 */
	diagnosis;

}