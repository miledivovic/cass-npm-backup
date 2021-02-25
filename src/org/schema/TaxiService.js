/**
 *  Schema.org/TaxiService
 *  A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 * 
 *  @author schema.org
 *  @class TaxiService
 *  @module org.schema
 *  @extends Service
 */
var TaxiService = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Service.call(this);
    this.context = "http://schema.org/";
    this.type = "TaxiService";
};
TaxiService = stjs.extend(TaxiService, Service, [], null, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
