/**
 * Schema.org/WebApplication
 * Web applications.
 *
 * @author schema.org
 * @class WebApplication
 * @module org.schema
 */
module.exports = class WebApplication extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WebApplication";
	}

}