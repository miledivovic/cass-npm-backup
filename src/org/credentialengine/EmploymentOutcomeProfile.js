/**
 * credentialengine.org/EmploymentOutcomeProfile
 * Entity that describes employment outcomes and related statistical information for a given credential.
 * @author credentialengine.org
 * @class EmploymentOutcomeProfile
 * @module org.credentialengine
 * @extends AggregateDataProfile
 */
module.exports = class EmploymentOutcomeProfile extends ce.AggregateDataProfile
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","EmploymentOutcomeProfile");
	}

	/**
	 * http://purl.org/ctdl/terms/dateEffective
	 * Effective date of the content of a credential, assessment or learning opportunity.
	 * @property dateEffective
	 * @type date
	 */
	dateEffective;

	/**
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

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