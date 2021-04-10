/**
 * credentialengine.org/FinancialAssistanceProfile
 * Entity that describes financial assistance that is offered or available.
 * @author credentialengine.org
 * @class FinancialAssistanceProfile
 * @module org.credentialengine
 */
module.exports = class FinancialAssistanceProfile extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","FinancialAssistanceProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/financialAssistanceType
	 * Type of financial assistance; select from an existing enumeration of such types.
	 * @property financialAssistanceType
	 * @type CredentialAlignmentObject
	 */
	financialAssistanceType;

	/**
	 * http://purl.org/ctdl/terms/financialAssistanceValue
	 * Description of the amount of financial assistance available.
	 * @property financialAssistanceValue
	 * @type QuantitativeValue
	 */
	financialAssistanceValue;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/subjectWebpage
	 * Webpage that describes this entity.
	 * The web page being referenced describes the entity. The value of subjectWebpage is an authoritative location for information about the subject but should not assumed to be a persistent identifier of the subject.
	 * @property subjectWebpage
	 * @type anyURI
	 */
	subjectWebpage;

}