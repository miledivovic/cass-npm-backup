/**
 *  Schema.org/ServiceChannel
 *  A means for accessing a service, e.g. a government office location, web site, or phone number.
 * 
 *  @author schema.org
 *  @class ServiceChannel
 *  @module org.schema
 *  @extends Intangible
 */
var ServiceChannel = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ServiceChannel";
};
ServiceChannel = stjs.extend(ServiceChannel, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/providesService
     *  The service provided by this channel.
     * 
     *  @property providesService
     *  @type Service
     */
    providesService = null;
    /**
     *  Schema.org/serviceLocation
     *  The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
     * 
     *  @property serviceLocation
     *  @type Place
     */
    serviceLocation = null;
    /**
     *  Schema.org/servicePostalAddress
     *  The address for accessing the service by mail.
     * 
     *  @property servicePostalAddress
     *  @type PostalAddress
     */
    servicePostalAddress = null;
    /**
     *  Schema.org/availableLanguage
     *  A language someone may use with the item. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
     * 
     *  @property availableLanguage
     *  @type Language
     */
    availableLanguage = null;
    /**
     *  Schema.org/serviceSmsNumber
     *  The number to access the service by text message.
     * 
     *  @property serviceSmsNumber
     *  @type ContactPoint
     */
    serviceSmsNumber = null;
    /**
     *  Schema.org/serviceUrl
     *  The website to access the service.
     * 
     *  @property serviceUrl
     *  @type URL
     */
    serviceUrl = null;
    /**
     *  Schema.org/servicePhone
     *  The phone number to use to access the service.
     * 
     *  @property servicePhone
     *  @type ContactPoint
     */
    servicePhone = null;
    /**
     *  Schema.org/processingTime
     *  Estimated processing time for the service using this channel.
     * 
     *  @property processingTime
     *  @type Duration
     */
    processingTime = null;
}, {providesService: "Service", serviceLocation: "Place", servicePostalAddress: "PostalAddress", availableLanguage: "Language", serviceSmsNumber: "ContactPoint", servicePhone: "ContactPoint", processingTime: "Duration", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
