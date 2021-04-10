/**
 * credentialengine.org/Assessment
 * Direct, indirect, formative, and summative evaluation or estimation of the nature, ability, or quality of an entity, performance, or outcome of an action.
 * @author credentialengine.org
 * @class Assessment
 * @module org.credentialengine
 */
module.exports = class Assessment extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","Assessment");
	}

}