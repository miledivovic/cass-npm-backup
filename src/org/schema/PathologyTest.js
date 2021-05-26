const schema = {};
schema.MedicalTest = require("./MedicalTest.js");
/**
 * Schema.org/PathologyTest
 * A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 *
 * @author schema.org
 * @class PathologyTest
 * @module org.schema
 * @extends MedicalTest
 */
module.exports = class PathologyTest extends schema.MedicalTest {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PathologyTest");
	}

	/**
	 * Schema.org/tissueSample
	 * The type of tissue sample required for the test.
	 *
	 * @property tissueSample
	 * @type Text
	 */
	tissueSample;

}