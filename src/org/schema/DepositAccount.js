/**
 *  Schema.org/DepositAccount
 *  A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.
 * 
 *  @author schema.org
 *  @class DepositAccount
 *  @module org.schema
 *  @extends BankAccount
 */
var DepositAccount = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    BankAccount.call(this);
    this.context = "http://schema.org/";
    this.type = "DepositAccount";
};
DepositAccount = stjs.extend(DepositAccount, BankAccount, [], null, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
