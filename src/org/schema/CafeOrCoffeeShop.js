const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/CafeOrCoffeeShop
 * A cafe or coffee shop.
 *
 * @author schema.org
 * @class CafeOrCoffeeShop
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class CafeOrCoffeeShop extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CafeOrCoffeeShop");
	}

}