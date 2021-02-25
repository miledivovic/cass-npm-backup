/**
 *  Schema.org/LoanOrCredit
 *  A financial product for the loaning of an amount of money under agreed terms and charges.
 * 
 *  @author schema.org
 *  @class LoanOrCredit
 *  @module org.schema
 *  @extends FinancialProduct
 */
var LoanOrCredit = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    FinancialProduct.call(this);
    this.context = "http://schema.org/";
    this.type = "LoanOrCredit";
};
LoanOrCredit = stjs.extend(LoanOrCredit, FinancialProduct, [], function(constructor, prototype) {
    /**
     *  Schema.org/loanTerm
     *  The duration of the loan or credit agreement.
     * 
     *  @property loanTerm
     *  @type QuantitativeValue
     */
    prototype.loanTerm = null;
    /**
     *  Schema.org/amount
     *  The amount of money.
     * 
     *  @property amount
     *  @type Number
     */
    prototype.amount = null;
    /**
     *  Schema.org/requiredCollateral
     *  Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
     * 
     *  @property requiredCollateral
     *  @type Thing
     */
    prototype.requiredCollateral = null;
}, {loanTerm: "QuantitativeValue", requiredCollateral: "Thing", serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
