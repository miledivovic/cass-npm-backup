const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/OutletStore
 * An outlet store.
 *
 * @author schema.org
 * @class OutletStore
 * @module org.schema
 * @extends Store
 */
module.exports = class OutletStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OutletStore");
	}

}