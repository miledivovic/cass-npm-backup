/**
 * Schema.org/FoodEstablishment
 * A food-related business.
 *
 * @author schema.org
 * @class FoodEstablishment
 * @module org.schema
 */
module.exports = class FoodEstablishment extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FoodEstablishment";
	}

}