/**
 * Schema.org/CafeOrCoffeeShop
 * A cafe or coffee shop.
 *
 * @author schema.org
 * @class CafeOrCoffeeShop
 * @module org.schema
 */
module.exports = class CafeOrCoffeeShop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CafeOrCoffeeShop";
	}

}