/**
 * credentialengine.org/Course
 * Structured sequence of one or more educational activities that aims to develop a prescribed set of knowledge, competence or ability of learners.
 * @author credentialengine.org
 * @class Course
 * @module org.credentialengine
 * @extends LearningOpportunity
 */
module.exports = class Course extends ce.LearningOpportunity
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		context="http://schema.eduworks.com/simpleCtdl";
		type="Course";
	}

}