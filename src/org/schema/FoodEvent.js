/**
 * Schema.org/FoodEvent
 * Event type: Food event.
 *
 * @author schema.org
 * @class FoodEvent
 * @module org.schema
 */
module.exports = class FoodEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "FoodEvent");
	}
};
