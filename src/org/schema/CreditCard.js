/**
 *  Schema.org/CreditCard
 *  A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
 * 
 *  @author schema.org
 *  @class CreditCard
 *  @module org.schema
 *  @extends LoanOrCredit
 */
var CreditCard = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    LoanOrCredit.call(this);
    this.context = "http://schema.org/";
    this.type = "CreditCard";
};
CreditCard = stjs.extend(CreditCard, LoanOrCredit, [], null, {loanTerm: "QuantitativeValue", requiredCollateral: "Thing", serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
