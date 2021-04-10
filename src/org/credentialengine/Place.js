/**
 * credentialengine.org/Place
 * Entity describing a physical location or geospatial area.
 * @author credentialengine.org
 * @class Place
 * @module org.credentialengine
 */
module.exports = class Place extends EcRemoteLinkedData
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super("http://schema.eduworks.com/simpleCtdl","Place");
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
	 * http://purl.org/ctdl/terms/description
	 * Statement, characterization or account of the entity.
	 * @property description
	 * @type langString
	 */
	description;

	/**
	 * http://purl.org/ctdl/terms/geoURI
	 * Entity that describes the longitude, latitude and other location details of a place.
	 * This may define a place at any scale. Examples include a city, state, province, country, or continent.
	 * @property geoURI
	 * @type anyURI
	 */
	geoURI;

	/**
	 * http://purl.org/ctdl/terms/identifier
	 * Alphanumeric token that identifies this resource and information about the token's originating context or scheme.
	 * @property identifier
	 * @type IdentifierValue
	 */
	identifier;

	/**
	 * http://purl.org/ctdl/terms/latitude
	 * Latitude of a location.
	 * For example 37.42242 (WGS 84)
	 * @property latitude
	 * @type float
	 */
	latitude;

	/**
	 * http://purl.org/ctdl/terms/longitude
	 * The longitude of a location.
	 * For example -122.08585 (WGS 84).
	 * @property longitude
	 * @type float
	 */
	longitude;

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

	/**
	 * http://purl.org/ctdl/terms/targetContactPoint
	 * Options for contacting the organization or person.
	 * @property targetContactPoint
	 * @type ContactPoint
	 */
	targetContactPoint;

}