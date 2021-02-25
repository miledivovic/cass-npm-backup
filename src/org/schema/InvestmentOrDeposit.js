/**
 *  Schema.org/InvestmentOrDeposit
 *  A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 * 
 *  @author schema.org
 *  @class InvestmentOrDeposit
 *  @module org.schema
 *  @extends FinancialProduct
 */
var InvestmentOrDeposit = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FinancialProduct.call(this);
    this.context = "http://schema.org/";
    this.type = "InvestmentOrDeposit";
};
InvestmentOrDeposit = stjs.extend(InvestmentOrDeposit, FinancialProduct, [], function(constructor, prototype) {
    /**
     *  Schema.org/amount
     *  The amount of money.
     * 
     *  @property amount
     *  @type Number
     */
    prototype.amount = null;
}, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
