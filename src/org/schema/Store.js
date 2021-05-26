const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/Store
 * A retail good store.
 *
 * @author schema.org
 * @class Store
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class Store extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Store");
	}

}