const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ShoeStore
 * A shoe store.
 *
 * @author schema.org
 * @class ShoeStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ShoeStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShoeStore");
	}

}