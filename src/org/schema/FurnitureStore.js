const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/FurnitureStore
 * A furniture store.
 *
 * @author schema.org
 * @class FurnitureStore
 * @module org.schema
 * @extends Store
 */
module.exports = class FurnitureStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FurnitureStore");
	}

}