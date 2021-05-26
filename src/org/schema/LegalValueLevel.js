const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/LegalValueLevel
 * A list of possible levels for the legal validity of a legislation.
 *
 * @author schema.org
 * @class LegalValueLevel
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class LegalValueLevel extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegalValueLevel");
	}

}