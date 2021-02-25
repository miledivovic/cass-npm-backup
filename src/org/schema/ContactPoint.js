/**
 *  Schema.org/ContactPoint
 *  A contact point&#x2014;for example, a Customer Complaints department.
 * 
 *  @author schema.org
 *  @class ContactPoint
 *  @module org.schema
 *  @extends StructuredValue
 */
var ContactPoint = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "ContactPoint";
};
ContactPoint = stjs.extend(ContactPoint, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/serviceArea
     *  The geographic area where the service is provided.
     * 
     *  @property serviceArea
     *  @type GeoShape
     */
    prototype.serviceArea = null;
    /**
     *  Schema.org/hoursAvailable
     *  The hours during which this service or contact is available.
     * 
     *  @property hoursAvailable
     *  @type OpeningHoursSpecification
     */
    prototype.hoursAvailable = null;
    /**
     *  Schema.org/contactOption
     *  An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
     * 
     *  @property contactOption
     *  @type ContactPointOption
     */
    prototype.contactOption = null;
    /**
     *  Schema.org/availableLanguage
     *  A language someone may use with the item. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
     * 
     *  @property availableLanguage
     *  @type Language
     */
    prototype.availableLanguage = null;
    /**
     *  Schema.org/telephone
     *  The telephone number.
     * 
     *  @property telephone
     *  @type Text
     */
    prototype.telephone = null;
    /**
     *  Schema.org/email
     *  Email address.
     * 
     *  @property email
     *  @type Text
     */
    prototype.email = null;
    /**
     *  Schema.org/contactType
     *  A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
     * 
     *  @property contactType
     *  @type Text
     */
    prototype.contactType = null;
    /**
     *  Schema.org/productSupported
     *  The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
     * 
     *  @property productSupported
     *  @type Text
     */
    prototype.productSupported = null;
    /**
     *  Schema.org/faxNumber
     *  The fax number.
     * 
     *  @property faxNumber
     *  @type Text
     */
    prototype.faxNumber = null;
    /**
     *  Schema.org/areaServed
     *  The geographic area where a service or offered item is provided.
     * 
     *  @property areaServed
     *  @type Place
     */
    prototype.areaServed = null;
}, {serviceArea: "GeoShape", hoursAvailable: "OpeningHoursSpecification", contactOption: "ContactPointOption", availableLanguage: "Language", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
