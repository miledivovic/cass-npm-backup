const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/IceCreamShop
 * An ice cream shop.
 *
 * @author schema.org
 * @class IceCreamShop
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class IceCreamShop extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","IceCreamShop");
	}

}