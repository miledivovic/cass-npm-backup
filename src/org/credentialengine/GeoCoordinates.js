/**
 * credentialengine.org/GeoCoordinates
 * Geographic coordinates of a place or event including latitude and longitude as well as other locational information.
 * @author credentialengine.org
 * @class GeoCoordinates
 * @module org.credentialengine
 * @extends StructuredValue
 */
module.exports = class GeoCoordinates extends schema.StructuredValue
{
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor()
	{
		super();
		this.setContextAndType("http://schema.eduworks.com/simpleCtdl","GeoCoordinates");
	}

	/**
	 * http://purl.org/ctdl/terms/geoURI
	 * Entity that describes the longitude, latitude and other location details of a place.
	 * This may define a place at any scale. Examples include a city, state, province, country, or continent.
	 * @property geoURI
	 * @type anyURI
	 */
	geoURI;

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

}