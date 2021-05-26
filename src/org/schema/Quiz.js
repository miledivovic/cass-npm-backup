const schema = {};
schema.LearningResource = require("./LearningResource.js");
/**
 * Schema.org/Quiz
 * Quiz: A test of knowledge, skills and abilities.
 *
 * @author schema.org
 * @class Quiz
 * @module org.schema
 * @extends LearningResource
 */
module.exports = class Quiz extends schema.LearningResource {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Quiz");
	}

}