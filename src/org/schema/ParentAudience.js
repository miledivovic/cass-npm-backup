const schema = {};
schema.PeopleAudience = require("./PeopleAudience.js");
/**
 * Schema.org/ParentAudience
 * A set of characteristics describing parents, who can be interested in viewing some content.
 *
 * @author schema.org
 * @class ParentAudience
 * @module org.schema
 * @extends PeopleAudience
 */
module.exports = class ParentAudience extends schema.PeopleAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ParentAudience");
	}

	/**
	 * Schema.org/childMinAge
	 * Minimal age of the child.
	 *
	 * @property childMinAge
	 * @type Number
	 */
	childMinAge;

	/**
	 * Schema.org/childMaxAge
	 * Maximal age of the child.
	 *
	 * @property childMaxAge
	 * @type Number
	 */
	childMaxAge;

}