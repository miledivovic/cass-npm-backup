/**
 * Schema.org/TireShop
 * A tire shop.
 *
 * @author schema.org
 * @class TireShop
 * @module org.schema
 */
module.exports = class TireShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TireShop";
	}

}