/**
 * asn:ProgressionLevel
 * Identifiable point along a developmental progression of competence, achievement or temporal position.
 * @author credentialengine.org
 * @class ProgressionLevel
 * @module org.credentialengine
 */
module.exports = class ProgressionLevel extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","ProgressionLevel");
	}

}