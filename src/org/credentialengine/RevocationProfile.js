/**
 * credentialengine.org/RevocationProfile
 * Entity describing conditions and methods by which a credential can be removed from a holder.
 * @author credentialengine.org
 * @class RevocationProfile
 * @module org.credentialengine
 * @extends CreativeWork
 */
module.exports = class RevocationProfile extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.eduworks.com/simpleCtdl",
			"RevocationProfile"
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
	 * http://purl.org/ctdl/terms/region
	 * Entity that describes the longitude, latitude and other location details of an area.
	 * @property region
	 * @type Place
	 */
	region;

	/**
	 * http://purl.org/ctdl/terms/revocationCriteria
	 * Webpage or online document that provides information about the removal criteria for an awarded credential.
	 * @property revocationCriteria
	 * @type anyURI
	 */
	revocationCriteria;

	/**
	 * http://purl.org/ctdl/terms/revocationCriteriaDescription
	 * Textual description providing information about the removal criteria for an awarded credential.
	 * @property revocationCriteriaDescription
	 * @type langString
	 */
	revocationCriteriaDescription;
};
