const schema = {};
schema.MedicalTest = require("./MedicalTest.js");
/**
 * Schema.org/BloodTest
 * A medical test performed on a sample of a patient's blood.
 *
 * @author schema.org
 * @class BloodTest
 * @module org.schema
 * @extends MedicalTest
 */
module.exports = class BloodTest extends schema.MedicalTest {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BloodTest");
	}

}