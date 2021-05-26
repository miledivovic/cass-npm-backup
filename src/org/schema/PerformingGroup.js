const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/PerformingGroup
 * A performance group, such as a band, an orchestra, or a circus.
 *
 * @author schema.org
 * @class PerformingGroup
 * @module org.schema
 * @extends Organization
 */
module.exports = class PerformingGroup extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PerformingGroup");
	}

}