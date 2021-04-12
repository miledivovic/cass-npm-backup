/**
 * Schema.org/PostalAddress
 * The mailing address.
 *
 * @author schema.org
 * @class PostalAddress
 * @module org.schema
 */
module.exports = class PostalAddress extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PostalAddress";
	}

}