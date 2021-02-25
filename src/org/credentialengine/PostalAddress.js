/**
 *  credentialengine.org/PostalAddress
 *  Entity describing a mailing address.
 *  @author credentialengine.org
 *  @class PostalAddress
 *  @module org.credentialengine
 *  @extends ContactPoint
 */
var PostalAddress = /**
 *  Constructor, automatically sets @context and @type.
 *  @constructor
 */
function() {
    ContactPoint.call(this);
    this.context = "http://schema.eduworks.com/simpleCtdl";
    this.type = "PostalAddress";
};
PostalAddress = stjs.extend(PostalAddress, ContactPoint, [], function(constructor, prototype) {
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
}, {owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
