/**
 * credentialengine.org/PostalAddress
 * Entity describing a mailing address.
 * @author credentialengine.org
 * @class PostalAddress
 * @module org.credentialengine
 * @extends ContactPoint
 */
module.exports = class PostalAddress extends ce.ContactPoint
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","PostalAddress");
	}

	/**
	 * http://purl.org/ctdl/terms/addressCountry
	 * Nation with its own government and occupying a particular territory identified by the two-letter ISO 3166-1 alpha-2 country code.
	 * @property addressCountry
	 * @type langString
	 */
	addressCountry;

	/**
	 * http://purl.org/ctdl/terms/addressLocality
	 * Town, city, or village in which a particular location is situtated.
	 * @property addressLocality
	 * @type langString
	 */
	addressLocality;

	/**
	 * http://purl.org/ctdl/terms/addressRegion
	 * State or province in which a particular location is situated.
	 * @property addressRegion
	 * @type langString
	 */
	addressRegion;

	/**
	 * http://purl.org/ctdl/terms/name
	 * Name or title of the resource.
	 * @property name
	 * @type langString
	 */
	name;

	/**
	 * http://purl.org/ctdl/terms/postalCode
	 * The postal code. For example, 94043.
	 * @property postalCode
	 * @type string
	 */
	postalCode;

	/**
	 * http://purl.org/ctdl/terms/postOfficeBoxNumber
	 * Post office box number for post office addresses.
	 * @property postOfficeBoxNumber
	 * @type string
	 */
	postOfficeBoxNumber;

	/**
	 * http://purl.org/ctdl/terms/streetAddress
	 * Street address. e.g. "1600 Amphitheatre Pkwy".
	 * @property streetAddress
	 * @type langString
	 */
	streetAddress;

}