const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/GardenStore
 * A garden store.
 *
 * @author schema.org
 * @class GardenStore
 * @module org.schema
 * @extends Store
 */
module.exports = class GardenStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GardenStore");
	}

}