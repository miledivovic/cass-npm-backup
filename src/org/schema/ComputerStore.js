const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ComputerStore
 * A computer store.
 *
 * @author schema.org
 * @class ComputerStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ComputerStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComputerStore");
	}

}