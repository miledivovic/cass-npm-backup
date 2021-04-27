/**
 * Schema.org/FastFoodRestaurant
 * A fast-food restaurant.
 *
 * @author schema.org
 * @class FastFoodRestaurant
 * @module org.schema
 */
module.exports = class FastFoodRestaurant extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "FastFoodRestaurant");
	}
};
