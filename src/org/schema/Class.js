const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Class
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 *
 * @author schema.org
 * @class Class
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Class extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Class");
	}

	/**
	 * Schema.org/supersededBy
	 * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
	 *
	 * @property supersededBy
	 * @type Enumeration
	 */
	supersededBy;

}