/**
 *  Schema.org/PaymentService
 *  A Service to transfer funds from a person or organization to a beneficiary person or organization.
 * 
 *  @author schema.org
 *  @class PaymentService
 *  @module org.schema
 *  @extends FinancialProduct
 */
var PaymentService = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FinancialProduct.call(this);
    this.context = "http://schema.org/";
    this.type = "PaymentService";
};
PaymentService = stjs.extend(PaymentService, FinancialProduct, [], null, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
