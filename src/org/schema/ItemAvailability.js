const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/ItemAvailability
 * A list of possible product availability options.
 *
 * @author schema.org
 * @class ItemAvailability
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class ItemAvailability extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ItemAvailability");
	}

}