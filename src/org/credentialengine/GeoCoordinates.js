/**
 *  credentialengine.org/GeoCoordinates
 *  Geographic coordinates of a place or event including latitude and longitude as well as other locational information.
 *  @author credentialengine.org
 *  @class GeoCoordinates
 *  @module org.credentialengine
 *  @extends StructuredValue
 */
var GeoCoordinates = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "GeoCoordinates";
};
GeoCoordinates = stjs.extend(GeoCoordinates, StructuredValue, [], function(constructor, prototype) {
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
}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
