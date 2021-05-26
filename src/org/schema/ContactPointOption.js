const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/ContactPointOption
 * Enumerated options related to a ContactPoint.
 *
 * @author schema.org
 * @class ContactPointOption
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class ContactPointOption extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ContactPointOption");
	}

}