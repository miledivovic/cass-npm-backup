const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/GenderType
 * An enumeration of genders.
 *
 * @author schema.org
 * @class GenderType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class GenderType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GenderType");
	}

}