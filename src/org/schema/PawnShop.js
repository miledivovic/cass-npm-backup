const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/PawnShop
 * A shop that will buy, or lend money against the security of, personal possessions.
 *
 * @author schema.org
 * @class PawnShop
 * @module org.schema
 * @extends Store
 */
module.exports = class PawnShop extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PawnShop");
	}

}