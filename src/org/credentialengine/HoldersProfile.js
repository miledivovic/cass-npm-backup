/**
 * credentialengine.org/HoldersProfile
 * Entity describing the count and related statistical information of holders of a given credential.
 * @author credentialengine.org
 * @class HoldersProfile
 * @module org.credentialengine
 * @extends AggregateDataProfile
 */
module.exports = class HoldersProfile extends ce.AggregateDataProfile {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.eduworks.com/simpleCtdl",
			"HoldersProfile"
		);
	}

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
	 * http://purl.org/ctdl/terms/numberAwarded
	 * Number of credentials awarded.
	 * @property numberAwarded
	 * @type integer
	 */
	numberAwarded;

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
};
