const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/TireShop
 * A tire shop.
 *
 * @author schema.org
 * @class TireShop
 * @module org.schema
 * @extends Store
 */
module.exports = class TireShop extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TireShop");
	}

}