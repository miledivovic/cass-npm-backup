/**
 *  Schema.org/PostalAddress
 *  The mailing address.
 * 
 *  @author schema.org
 *  @class PostalAddress
 *  @module org.schema
 *  @extends ContactPoint
 */
var PostalAddress = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ContactPoint.call(this);
    this.context = "http://schema.org/";
    this.type = "PostalAddress";
};
PostalAddress = stjs.extend(PostalAddress, ContactPoint, [], function(constructor, prototype) {
    /**
     *  Schema.org/postOfficeBoxNumber
     *  The post office box number for PO box addresses.
     * 
     *  @property postOfficeBoxNumber
     *  @type Text
     */
    postOfficeBoxNumber = null;
    /**
     *  Schema.org/streetAddress
     *  The street address. For example, 1600 Amphitheatre Pkwy.
     * 
     *  @property streetAddress
     *  @type Text
     */
    streetAddress = null;
    /**
     *  Schema.org/addressCountry
     *  The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     * 
     *  @property addressCountry
     *  @type Text
     */
    addressCountry = null;
    /**
     *  Schema.org/addressRegion
     *  The region. For example, CA.
     * 
     *  @property addressRegion
     *  @type Text
     */
    addressRegion = null;
    /**
     *  Schema.org/postalCode
     *  The postal code. For example, 94043.
     * 
     *  @property postalCode
     *  @type Text
     */
    postalCode = null;
    /**
     *  Schema.org/addressLocality
     *  The locality. For example, Mountain View.
     * 
     *  @property addressLocality
     *  @type Text
     */
    addressLocality = null;
}, {serviceArea: "GeoShape", hoursAvailable: "OpeningHoursSpecification", contactOption: "ContactPointOption", availableLanguage: "Language", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
