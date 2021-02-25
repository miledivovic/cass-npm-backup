/**
 *  credentialengine.org/Place
 *  Entity describing a physical location or geospatial area.
 *  @author credentialengine.org
 *  @class Place
 *  @module org.credentialengine
 */
var Place = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.eduworks.com/simpleCtdl", "Place");
};
Place = stjs.extend(Place, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  http://purl.org/ctdl/terms/addressCountry
     *  Nation with its own government and occupying a particular territory identified by the two-letter ISO 3166-1 alpha-2 country code.
     *  @property addressCountry
     *  @type langString
     */
    prototype.addressCountry = null;
    /**
     *  http://purl.org/ctdl/terms/addressLocality
     *  Town, city, or village in which a particular location is situtated.
     *  @property addressLocality
     *  @type langString
     */
    prototype.addressLocality = null;
    /**
     *  http://purl.org/ctdl/terms/addressRegion
     *  State or province in which a particular location is situtated.
     *  @property addressRegion
     *  @type langString
     */
    prototype.addressRegion = null;
    /**
     *  http://purl.org/ctdl/terms/description
     *  Statement, characterization or account of the entity.
     *  @property description
     *  @type langString
     */
    prototype.description = null;
    /**
     *  http://purl.org/ctdl/terms/geoURI
     *  Entity that describes the longitude, latitude and other location details of a place.
     *  This may define a place at any scale. Examples include a city, state, province, country, or continent.
     *  @property geoURI
     *  @type anyURI
     */
    prototype.geoURI = null;
    /**
     *  http://purl.org/ctdl/terms/latitude
     *  Latitude of a location.
     *  For example 37.42242 (WGS 84)
     *  @property latitude
     *  @type float
     */
    prototype.latitude = null;
    /**
     *  http://purl.org/ctdl/terms/longitude
     *  The longitude of a location.
     *  For example -122.08585 (WGS 84).
     *  @property longitude
     *  @type float
     */
    prototype.longitude = null;
    /**
     *  http://purl.org/ctdl/terms/name
     *  Name or title of the entity.
     *  @property name
     *  @type langString
     */
    prototype.name = null;
    /**
     *  http://purl.org/ctdl/terms/postalCode
     *  The postal code. For example, 94043.
     *  @property postalCode
     *  @type string
     */
    prototype.postalCode = null;
    /**
     *  http://purl.org/ctdl/terms/postOfficeBoxNumber
     *  Post office box number for post office addresses.
     *  @property postOfficeBoxNumber
     *  @type string
     */
    prototype.postOfficeBoxNumber = null;
    /**
     *  http://purl.org/ctdl/terms/streetAddress
     *  Street address. e.g. "1600 Amphitheatre Pkwy".
     *  @property streetAddress
     *  @type langString
     */
    prototype.streetAddress = null;
    /**
     *  http://purl.org/ctdl/terms/targetContactPoint
     *  Options for contacting the organization or person.
     *  @property targetContactPoint
     *  @type ContactPoint
     */
    prototype.targetContactPoint = null;
}, {targetContactPoint: "ContactPoint", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
