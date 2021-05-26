const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/LiquorStore
 * A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.
 *
 * @author schema.org
 * @class LiquorStore
 * @module org.schema
 * @extends Store
 */
module.exports = class LiquorStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LiquorStore");
	}

}