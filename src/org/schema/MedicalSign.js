const schema = {};
schema.MedicalSignOrSymptom = require("./MedicalSignOrSymptom.js");
/**
 * Schema.org/MedicalSign
 * Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 *
 * @author schema.org
 * @class MedicalSign
 * @module org.schema
 * @extends MedicalSignOrSymptom
 */
module.exports = class MedicalSign extends schema.MedicalSignOrSymptom {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalSign");
	}

	/**
	 * Schema.org/identifyingExam
	 * A physical examination that can identify this sign.
	 *
	 * @property identifyingExam
	 * @type PhysicalExam
	 */
	identifyingExam;

	/**
	 * Schema.org/identifyingTest
	 * A diagnostic test that can identify this sign.
	 *
	 * @property identifyingTest
	 * @type MedicalTest
	 */
	identifyingTest;

}