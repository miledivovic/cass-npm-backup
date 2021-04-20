/**
 * credentialengine.org/LearningResource
 * Entity that is used as part of an learning activity (e.g. a textbook) or that describes (e.g. a lesson plan) or records the educational activity (e.g. an audio- or video-recording of a lesson).
 * @author credentialengine.org
 * @class LearningResource
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class LearningResource extends schema.CreativeWork
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","LearningResource");
	}

}