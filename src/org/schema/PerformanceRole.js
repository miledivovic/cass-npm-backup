const schema = {};
schema.Role = require("./Role.js");
/**
 * Schema.org/PerformanceRole
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 *
 * @author schema.org
 * @class PerformanceRole
 * @module org.schema
 * @extends Role
 */
module.exports = class PerformanceRole extends schema.Role {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PerformanceRole");
	}

	/**
	 * Schema.org/characterName
	 * The name of a character played in some acting or performing role, i.e. in a PerformanceRole.
	 *
	 * @property characterName
	 * @type Text
	 */
	characterName;

}