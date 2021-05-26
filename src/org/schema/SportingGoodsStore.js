const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/SportingGoodsStore
 * A sporting goods store.
 *
 * @author schema.org
 * @class SportingGoodsStore
 * @module org.schema
 * @extends Store
 */
module.exports = class SportingGoodsStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportingGoodsStore");
	}

}