/**
 * Schema.org/ServiceChannel
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 *
 * @author schema.org
 * @class ServiceChannel
 * @module org.schema
 */
module.exports = class ServiceChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ServiceChannel";
	}

}