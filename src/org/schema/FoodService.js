/**
 * Schema.org/FoodService
 * A food service, like breakfast, lunch, or dinner.
 *
 * @author schema.org
 * @class FoodService
 * @module org.schema
 */
public class FoodService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FoodService";
	}

}