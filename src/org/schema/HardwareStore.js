const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/HardwareStore
 * A hardware store.
 *
 * @author schema.org
 * @class HardwareStore
 * @module org.schema
 * @extends Store
 */
module.exports = class HardwareStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HardwareStore");
	}

}