/**
 * credentialengine.org/CostProfile
 * Entity that describes direct costs one would incur if one were to pursue a credential, assessment, learning opportunity, or aspects thereof.
 * @author credentialengine.org
 * @class CostProfile
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class CostProfile extends schema.CreativeWork
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","CostProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/audienceType
	 * The type of credential seeker for whom the entity is applicable; select from an existing enumeration of such types.
	 * @property audienceType
	 * @type CredentialAlignmentObject
	 */
	audienceType;

	/**
	 * http://purl.org/ctdl/terms/condition
	 * Single constraint, prerequisite, entry condition, requirement, or cost.
	 * @property condition
	 * @type langString
	 */
	condition;

	/**
	 * http://purl.org/ctdl/terms/costDetails
	 * Webpage or online document containing human-readable, in-depth information about costs.
	 * @property costDetails
	 * @type anyURI
	 */
	costDetails;

	/**
	 * http://purl.org/ctdl/terms/currency
	 * Currency in which the monetary amount is expressed in 3-letter ISO 4217 format such as "USD".
	 * @property currency
	 * @type string
	 */
	currency;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/directCostType
	 * Types of direct costs associated with earning or completing a credential, assessment or learning opportunity; select from an existing enumeration of such types.
	 * @property directCostType
	 * @type CredentialAlignmentObject
	 */
	directCostType;

	/**
	 * http://purl.org/ctdl/terms/endDate
	 * Date some event or activity ends.
	 * @property endDate
	 * @type date
	 */
	endDate;

	/**
	 * http://purl.org/ctdl/terms/jurisdiction
	 * Geographic or political region in which the credential is formally applicable or an organization has authority to act.
	 * @property jurisdiction
	 * @type JurisdictionProfile
	 */
	jurisdiction;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/paymentPattern
	 * Applicable pattern for payments such as "per semester" and "every three months".
	 * @property paymentPattern
	 * @type langString
	 */
	paymentPattern;

	/**
	 * http://purl.org/ctdl/terms/price
	 * Offer price of a credential, learning resource, assessment, related activity or resource.
	 * @property price
	 * @type decimal
	 */
	price;

	/**
	 * http://purl.org/ctdl/terms/region
	 * Entity that describes the longitude, latitude and other location details of an area.
	 * @property region
	 * @type Place
	 */
	region;

	/**
	 * http://purl.org/ctdl/terms/residencyType
	 * Type of legal residency status of a person; select from an existing enumeration of such types.
	 * Residency defines the duration of stay required by national, state, provincial or local laws that entitles a person to the legal protection and benefits provided to the applicable type.
	 * @property residencyType
	 * @type CredentialAlignmentObject
	 */
	residencyType;

	/**
	 * http://purl.org/ctdl/terms/startDate
	 * Date the validity or usefulness of the information in this resource begins.
	 * @property startDate
	 * @type date
	 */
	startDate;

}