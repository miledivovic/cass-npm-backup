/**
 * credentialengine.org/IndustryClassification
 * Class of of concept schemes defining industries such as NAICS in the U.S. and ESCO in the European Union.
 * @author credentialengine.org
 * @class IndustryClassification
 * @module org.credentialengine
 * @extends CredentialFramework
 */
module.exports = class IndustryClassification extends ce.CredentialFramework {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.eduworks.com/simpleCtdl",
			"IndustryClassification"
		);
	}
};
