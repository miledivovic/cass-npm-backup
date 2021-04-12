/**
 * Schema.org/FastFoodRestaurant
 * A fast-food restaurant.
 *
 * @author schema.org
 * @class FastFoodRestaurant
 * @module org.schema
 */
public class FastFoodRestaurant extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FastFoodRestaurant";
	}

}