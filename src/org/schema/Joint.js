/**
 * Schema.org/Joint
 * The anatomical location at which two or more bones make contact.
 *
 * @author schema.org
 * @class Joint
 * @module org.schema
 */
module.exports = class Joint extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Joint";
	}

}