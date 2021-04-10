/**
 * credentialengine.org/IdentifierValue
 * Means of identifying a resource, typically consisting of an alphanumeric token and a context or scheme from which that token originates.
 * @author credentialengine.org
 * @class IdentifierValue
 * @module org.credentialengine
 * @extends identifier
 */
module.exports = class IdentifierValue extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		context="http://schema.eduworks.com/simpleCtdl";
		type="IdentifierValue";
	}

	/**
	 * http://purl.org/ctdl/terms/identifierType
	 * Framework, scheme, type, or other organizing principle of this identifier.
	 * @property identifierType
	 * @type anyURI
	 */
	identifierType;

	/**
	 * http://purl.org/ctdl/terms/identifierTypeName
	 * Formal name or acronym of the framework, scheme, type, or other organizing principle of this identifier, such as ISBN or ISSN.
	 * @property identifierTypeName
	 * @type langString
	 */
	identifierTypeName;

	/**
	 * http://purl.org/ctdl/terms/identifierValueCode
	 * Alphanumeric string identifier of the entity.
	 * Where a formal identification system exists for the identifier, recommended best practice is to use a string conforming to that system.
	 * @property identifierValueCode
	 * @type string
	 */
	identifierValueCode;

}