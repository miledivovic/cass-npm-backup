const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/BikeStore
 * A bike store.
 *
 * @author schema.org
 * @class BikeStore
 * @module org.schema
 * @extends Store
 */
module.exports = class BikeStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BikeStore");
	}

}