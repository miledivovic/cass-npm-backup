const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/GroceryStore
 * A grocery store.
 *
 * @author schema.org
 * @class GroceryStore
 * @module org.schema
 * @extends Store
 */
module.exports = class GroceryStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GroceryStore");
	}

}