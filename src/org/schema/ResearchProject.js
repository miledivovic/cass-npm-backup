const schema = {};
schema.Project = require("./Project.js");
/**
 * Schema.org/ResearchProject
 * A Research project.
 *
 * @author schema.org
 * @class ResearchProject
 * @module org.schema
 * @extends Project
 */
module.exports = class ResearchProject extends schema.Project {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ResearchProject");
	}

}