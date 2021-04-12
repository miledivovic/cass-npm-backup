/**
 * Schema.org/GroceryStore
 * A grocery store.
 *
 * @author schema.org
 * @class GroceryStore
 * @module org.schema
 */
module.exports = class GroceryStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GroceryStore";
	}

}