const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Enumeration
 * Lists or enumerations—for example, a list of cuisines or music genres, etc.
 *
 * @author schema.org
 * @class Enumeration
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Enumeration extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Enumeration");
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