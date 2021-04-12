/**
 * Schema.org/NGO
 * Organization: Non-governmental Organization.
 *
 * @author schema.org
 * @class NGO
 * @module org.schema
 */
module.exports = class NGO extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NGO";
	}

}