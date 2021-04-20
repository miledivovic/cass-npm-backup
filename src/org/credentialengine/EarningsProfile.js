global.ce.AggregateDataProfile = require("./AggregateDataProfile.js");
/**
 * credentialengine.org/EarningsProfile
 * Entity that describes earning and related statistical information for a given credential.
 * @author credentialengine.org
 * @class EarningsProfile
 * @module org.credentialengine
 * @extends AggregateDataProfile
 */
module.exports = class EarningsProfile extends ce.AggregateDataProfile
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","EarningsProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/dateEffective
	 * Effective date of the content of a credential, assessment or learning opportunity.
	 * @property dateEffective
	 * @type date
	 */
	dateEffective;

	/**
	 * http://purl.org/ctdl/terms/highEarnings
	 * Upper interquartile earnings.
	 * @property highEarnings
	 * @type integer
	 */
	highEarnings;

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
	 * http://purl.org/ctdl/terms/postReceiptMonths
	 * Number of months after earning a credential when employment and earnings data is collected.
	 * Number of months usually range between 3 months (one quarter) to ten years.
	 * @property postReceiptMonths
	 * @type integer
	 */
	postReceiptMonths;

	/**
	 * http://purl.org/ctdl/terms/region
	 * Entity that describes the longitude, latitude and other location details of an area.
	 * @property region
	 * @type Place
	 */
	region;

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