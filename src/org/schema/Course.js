global.schema.LearningResource = require("./LearningResource.js");
/**
 * Schema.org/Course
 * A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 *
 * @author schema.org
 * @class Course
 * @module org.schema
 * @extends LearningResource
 */
module.exports = class Course extends schema.LearningResource {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Course");
	}
};
