const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/PetStore
 * A pet store.
 *
 * @author schema.org
 * @class PetStore
 * @module org.schema
 * @extends Store
 */
module.exports = class PetStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PetStore");
	}

}