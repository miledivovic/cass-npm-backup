/**
 * Schema.org/ResearchProject
 * A Research project.
 *
 * @author schema.org
 * @class ResearchProject
 * @module org.schema
 */
module.exports = class ResearchProject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ResearchProject";
	}

}