const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/WholesaleStore
 * A wholesale store.
 *
 * @author schema.org
 * @class WholesaleStore
 * @module org.schema
 * @extends Store
 */
module.exports = class WholesaleStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WholesaleStore");
	}

}