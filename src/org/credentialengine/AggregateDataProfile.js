/**
 * credentialengine.org/AggregateDataProfile
 * Resource containing summary statistical data.
 * @author credentialengine.org
 * @class AggregateDataProfile
 * @module org.credentialengine
 */
module.exports = class AggregateDataProfile extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","AggregateDataProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/currency
	 * Currency in which the monetary amount is expressed in 3-letter ISO 4217 format such as "USD".
	 * @property currency
	 * @type string
	 */
	currency;

	/**
	 * http://purl.org/ctdl/terms/dateEffective
	 * Effective date of the content of a credential, assessment or learning opportunity.
	 * @property dateEffective
	 * @type date
	 */
	dateEffective;

	/**
	 * http://purl.org/ctdl/terms/demographicInformation
	 * Aggregate data or summaries of statistical data relating to the population of credential holders including data about gender, geopolitical regions, age, education levels, and other categories of interest.
	 * @property demographicInformation
	 * @type langString
	 */
	demographicInformation;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/expirationDate
	 * Date beyond which the resource is no longer offered or available.
	 * Previously earned, completed, or attained resources may still be valid even if they are no longer offered.
	 * @property expirationDate
	 * @type date
	 */
	expirationDate;

	/**
	 * http://purl.org/ctdl/terms/highEarnings
	 * Upper interquartile earnings.
	 * @property highEarnings
	 * @type integer
	 */
	highEarnings;

	/**
	 * http://purl.org/ctdl/terms/jobsObtained
	 * Number of jobs obtained in the region during a given timeframe.
	 * @property jobsObtained
	 * @type QuantitativeValue
	 */
	jobsObtained;

	/**
	 * http://purl.org/ctdl/terms/jurisdiction
	 * Geographic or political region in which the credential is formally applicable or an organization has authority to act.
	 * @property jurisdiction
	 * @type JurisdictionProfile
	 */
	jurisdiction;

	/**
	 * http://purl.org/ctdl/terms/lowEarnings
	 * Lower interquartile earnings.
	 * @property lowEarnings
	 * @type integer
	 */
	lowEarnings;

	/**
	 * http://purl.org/ctdl/terms/medianEarnings
	 * Median earnings.
	 * @property medianEarnings
	 * @type integer
	 */
	medianEarnings;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/numberAwarded
	 * Number of credentials awarded.
	 * @property numberAwarded
	 * @type integer
	 */
	numberAwarded;

	/**
	 * http://purl.org/ctdl/terms/postReceiptMonths
	 * Number of months after earning a credential when employment and earnings data is collected.
	 * Number of months usually range between 3 months (one quarter) to ten years.
	 * @property postReceiptMonths
	 * @type integer
	 */
	postReceiptMonths;

	/**
	 * http://purl.org/ctdl/terms/source
	 * Authoritative source of an entity's information.
	 * Citation or description of an authoritative souce from which information or description has been derived.
	 * @property source
	 * @type anyURI
	 */
	source;

	/**
	 * qdata:relevantDataSet
	 * Data Set on which earnings or employment data is based.
	 * @property relevantDataSet
	 * @type DataSetProfile
	 */
	relevantDataSet;

}