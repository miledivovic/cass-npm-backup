const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/JewelryStore
 * A jewelry store.
 *
 * @author schema.org
 * @class JewelryStore
 * @module org.schema
 * @extends Store
 */
module.exports = class JewelryStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","JewelryStore");
	}

}