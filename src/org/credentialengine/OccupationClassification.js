/**
 * credentialengine.org/OccupationClassification
 * Class of concept schemes identifying occupations such as the Standard Occupational Classification (SOC) system in the U.S. and the European Skills/Competences, Qualifications and Occupations (ESCO).
 * @author credentialengine.org
 * @class OccupationClassification
 * @module org.credentialengine
 * @extends CredentialFramework
 */
module.exports = class OccupationClassification extends ce.CredentialFramework
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","OccupationClassification");
	}

}