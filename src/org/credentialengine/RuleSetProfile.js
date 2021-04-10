/**
 * credentialengine.org/RuleSetProfile
 * Resource defining the application of a RuleSet to a particular ComponentCondition.
 * @author credentialengine.org
 * @class RuleSetProfile
 * @module org.credentialengine
 */
module.exports = class RuleSetProfile extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","RuleSetProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/ruleSetUsed
	 * Resource defining the applicable method or algorithm used for fulfilling the requirements of the ComponentCondition.
	 * @property ruleSetUsed
	 * @type anyURI
	 */
	ruleSetUsed;

}