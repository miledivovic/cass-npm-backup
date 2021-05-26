const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/FastFoodRestaurant
 * A fast-food restaurant.
 *
 * @author schema.org
 * @class FastFoodRestaurant
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class FastFoodRestaurant extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FastFoodRestaurant");
	}

}