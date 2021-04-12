/**
 * Schema.org/AutoBodyShop
 * Auto body shop.
 *
 * @author schema.org
 * @class AutoBodyShop
 * @module org.schema
 */
module.exports = class AutoBodyShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AutoBodyShop";
	}

}