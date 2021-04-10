/**
 * credentialengine.org/RuleSet
 * Resource that identifies the rules or methods by which one or more PathwayComponent instances satisfy the requirements of a ComponentCondition.
 * In the future, there will likely be multiple formally recognized RuleSets.
 * @author credentialengine.org
 * @class RuleSet
 * @module org.credentialengine
 */
module.exports = class RuleSet extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","RuleSet");
	}

}