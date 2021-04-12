/**
 * Schema.org/SizeSystemEnumeration
 * Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 *
 * @author schema.org
 * @class SizeSystemEnumeration
 * @module org.schema
 */
module.exports = class SizeSystemEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SizeSystemEnumeration";
	}

}