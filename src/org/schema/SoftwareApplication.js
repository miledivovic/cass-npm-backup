/**
 * Schema.org/SoftwareApplication
 * A software application.
 *
 * @author schema.org
 * @class SoftwareApplication
 * @module org.schema
 */
module.exports = class SoftwareApplication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SoftwareApplication";
	}

}