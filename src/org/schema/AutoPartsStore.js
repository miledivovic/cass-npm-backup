const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoPartsStore
 * An auto parts store.
 *
 * @author schema.org
 * @class AutoPartsStore
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoPartsStore extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoPartsStore");
	}

}