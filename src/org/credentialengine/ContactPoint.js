/**
 * credentialengine.org/ContactPoint
 * Means of contacting an organization or its representative.
 * For example, a public relations email address or phone number.
 * @author credentialengine.org
 * @class ContactPoint
 * @module org.credentialengine
 */
module.exports = class ContactPoint extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "ContactPoint");
	}

	/**
	 * http://purl.org/ctdl/terms/contactType
	 * Text identifying the type of service provided by an organizational contact.
	 * A person or organization may have different contact points for different services. The contact type property provides for adding text to identity the service; e.g., "toll-free number" or "support for hearing-impaired callers".
	 * @property contactType
	 * @type langString
	 */
	contactType;

	/**
	 * http://purl.org/ctdl/terms/email
	 * Email address of the organization or person.
	 * @property email
	 * @type string
	 */
	email;

	/**
	 * http://purl.org/ctdl/terms/faxNumber
	 * Fax number.
	 * @property faxNumber
	 * @type string
	 */
	faxNumber;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/socialMedia
	 * Social media access point for an agent or an agent's contact point.
	 * @property socialMedia
	 * @type anyURI
	 */
	socialMedia;

	/**
	 * http://purl.org/ctdl/terms/telephone
	 * Telephone number.
	 * @property telephone
	 * @type string
	 */
	telephone;
};
