const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/RestrictedDiet
 * A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
 *
 * @author schema.org
 * @class RestrictedDiet
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class RestrictedDiet extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RestrictedDiet");
	}

}