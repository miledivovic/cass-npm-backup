/**
 * Schema.org/School
 * A school.
 *
 * @author schema.org
 * @class School
 * @module org.schema
 */
module.exports = class School extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "School";
	}

}