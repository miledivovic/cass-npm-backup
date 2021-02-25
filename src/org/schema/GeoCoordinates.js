/**
 *  Schema.org/GeoCoordinates
 *  The geographic coordinates of a place or event.
 * 
 *  @author schema.org
 *  @class GeoCoordinates
 *  @module org.schema
 *  @extends StructuredValue
 */
var GeoCoordinates = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "GeoCoordinates";
};
GeoCoordinates = stjs.extend(GeoCoordinates, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/address
     *  Physical address of the item.
     * 
     *  @property address
     *  @type PostalAddress
     */
    prototype.address = null;
    /**
     *  Schema.org/latitude
     *  The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     * 
     *  @property latitude
     *  @type Text
     */
    prototype.latitude = null;
    /**
     *  Schema.org/longitude
     *  The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     * 
     *  @property longitude
     *  @type Text
     */
    prototype.longitude = null;
    /**
     *  Schema.org/addressCountry
     *  The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     * 
     *  @property addressCountry
     *  @type Text
     */
    prototype.addressCountry = null;
    /**
     *  Schema.org/postalCode
     *  The postal code. For example, 94043.
     * 
     *  @property postalCode
     *  @type Text
     */
    prototype.postalCode = null;
    /**
     *  Schema.org/elevation
     *  The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     * 
     *  @property elevation
     *  @type Text
     */
    prototype.elevation = null;
}, {address: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
