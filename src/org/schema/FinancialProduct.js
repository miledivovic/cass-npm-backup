/**
 *  Schema.org/FinancialProduct
 *  A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 * 
 *  @author schema.org
 *  @class FinancialProduct
 *  @module org.schema
 *  @extends Service
 */
var FinancialProduct = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Service.call(this);
    this.context = "http://schema.org/";
    this.type = "FinancialProduct";
};
FinancialProduct = stjs.extend(FinancialProduct, Service, [], function(constructor, prototype) {
    /**
     *  Schema.org/annualPercentageRate
     *  The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
     * 
     *  @property annualPercentageRate
     *  @type Number
     */
    prototype.annualPercentageRate = null;
    /**
     *  Schema.org/interestRate
     *  The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
     * 
     *  @property interestRate
     *  @type Number
     */
    prototype.interestRate = null;
    /**
     *  Schema.org/feesAndCommissionsSpecification
     *  Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
     * 
     *  @property feesAndCommissionsSpecification
     *  @type Text
     */
    prototype.feesAndCommissionsSpecification = null;
}, {serviceAudience: "Audience", serviceArea: "GeoShape", provider: "Person", audience: "Audience", hasOfferCatalog: "OfferCatalog", hoursAvailable: "OpeningHoursSpecification", aggregateRating: "AggregateRating", offers: "Offer", broker: "Person", serviceOutput: "Thing", logo: "ImageObject", isSimilarTo: "Product", isRelatedTo: "Product", availableChannel: "ServiceChannel", review: "Review", produces: "Thing", brand: "Organization", areaServed: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
