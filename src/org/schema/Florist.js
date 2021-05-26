const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/Florist
 * A florist.
 *
 * @author schema.org
 * @class Florist
 * @module org.schema
 * @extends Store
 */
module.exports = class Florist extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Florist");
	}

}