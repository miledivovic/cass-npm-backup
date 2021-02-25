/**
 *  Schema.org/PaymentCard
 *  A payment method using a credit, debit, store or other card to associate the payment with an account.
 * 
 *  @author schema.org
 *  @class PaymentCard
 *  @module org.schema
 *  @extends FinancialProduct
 */
var PaymentCard = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FinancialProduct.call(this);
    this.context = "http://schema.org/";
    this.type = "PaymentCard";
};
PaymentCard = stjs.extend(PaymentCard, FinancialProduct, [], null, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
