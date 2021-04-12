/**
 * Schema.org/MedicalTest
 * Any medical test, typically performed for diagnostic purposes.
 *
 * @author schema.org
 * @class MedicalTest
 * @module org.schema
 */
module.exports = class MedicalTest extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalTest";
	}

}