/**
 *  Schema.org/GeoCircle
 *  A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
 *  it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
 *  The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
 * 
 *  @author schema.org
 *  @class GeoCircle
 *  @module org.schema
 *  @extends GeoShape
 */
var GeoCircle = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    GeoShape.call(this);
    this.context = "http://schema.org/";
    this.type = "GeoCircle";
};
GeoCircle = stjs.extend(GeoCircle, GeoShape, [], function(constructor, prototype) {
    /**
     *  Schema.org/geoRadius
     *  Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).
     * 
     *  @property geoRadius
     *  @type Number
     */
    prototype.geoRadius = null;
    /**
     *  Schema.org/geoMidpoint
     *  Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.
     * 
     *  @property geoMidpoint
     *  @type GeoCoordinates
     */
    prototype.geoMidpoint = null;
}, {geoMidpoint: "GeoCoordinates", address: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
