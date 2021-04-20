/**
 * Schema.org/FoodService
 * A food service, like breakfast, lunch, or dinner.
 *
 * @author schema.org
 * @class FoodService
 * @module org.schema
 */
module.exports = class FoodService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FoodService");
	}

}