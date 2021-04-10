/**
 * credentialengine.org/LearningResource
 * Entity that is used as part of an learning activity (e.g. a textbook) or that describes (e.g. a lesson plan) or records the educational activity (e.g. an audio- or video-recording of a lesson).
 * @author credentialengine.org
 * @class LearningResource
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class LearningResource extends ce.org.schema.CreativeWork
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		context="http://schema.eduworks.com/simpleCtdl";
		type="LearningResource";
	}

}