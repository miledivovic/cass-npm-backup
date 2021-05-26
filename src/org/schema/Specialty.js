const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/Specialty
 * Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 *
 * @author schema.org
 * @class Specialty
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class Specialty extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Specialty");
	}

}