/**
 * credentialengine.org/InstructionalProgramClassification
 * Class of concept schemes defining instructional program types such as the CIP codes in the U.S.
 * @author credentialengine.org
 * @class InstructionalProgramClassification
 * @module org.credentialengine
 * @extends CredentialFramework
 */
module.exports = class InstructionalProgramClassification extends ce.CredentialFramework
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","InstructionalProgramClassification");
	}

}