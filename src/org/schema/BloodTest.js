/**
 * Schema.org/BloodTest
 * A medical test performed on a sample of a patient's blood.
 *
 * @author schema.org
 * @class BloodTest
 * @module org.schema
 */
module.exports = class BloodTest extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BloodTest";
	}

}