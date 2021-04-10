/**
 * credentialengine.org/CredentialAssertion
 * Representation of a credential awarded to a person.
 * @author credentialengine.org
 * @class CredentialAssertion
 * @module org.credentialengine
 */
module.exports = class CredentialAssertion extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","CredentialAssertion");
	}

}