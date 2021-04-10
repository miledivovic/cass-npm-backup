/**
 *  Schema.org/GovernmentService
 *  A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 * 
 *  @author schema.org
 *  @class GovernmentService
 *  @module org.schema
 *  @extends Service
 */
var GovernmentService = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Service.call(this);
    this.context = "http://schema.org/";
    this.type = "GovernmentService";
};
GovernmentService = stjs.extend(GovernmentService, Service, [], function(constructor, prototype) {
    /**
     *  Schema.org/serviceOperator
     *  The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.
     * 
     *  @property serviceOperator
     *  @type Organization
     */
    serviceOperator = null;
}, {serviceOperator: "Organization", serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
