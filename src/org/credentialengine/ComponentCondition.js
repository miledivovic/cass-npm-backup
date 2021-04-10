/**
 * credentialengine.org/ComponentCondition
 * Resource that describes what must be done to complete a PathwayComponent, or part thereof, as determined by the issuer of the Pathway.
 * A ComponentCondition references a single RuleSet defining appropriate values fulfilling the condition.
 * @author credentialengine.org
 * @class ComponentCondition
 * @module org.credentialengine
 */
module.exports = class ComponentCondition extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","ComponentCondition");
	}

	/**
	 * http://purl.org/ctdl/terms/alternativeRuleSet
	 * Identifies the resource describing the values necessary to apply the rules defined in the rule set.
	 * @property alternativeRuleSet
	 * @type RuleSetProfile
	 */
	alternativeRuleSet;

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
	 * http://purl.org/ctdl/terms/requiredNumber
	 * Number of targetComponent resources that must be fulfilled in order to satisfy the ComponentCondition.
	 * @property requiredNumber
	 * @type integer
	 */
	requiredNumber;

	/**
	 * http://purl.org/ctdl/terms/targetComponent
	 * Candidate PathwayComponent for the ComponentCondition as determined by applying the RuleSet.
	 * @property targetComponent
	 * @type AssessmentComponent | BasicComponent | CocurricularComponent | CompetencyComponent | CourseComponent | CredentialComponent | ExtracurricularComponent | JobComponent | SelectionComponent | WorkExperienceComponent
	 */
	targetComponent;

}