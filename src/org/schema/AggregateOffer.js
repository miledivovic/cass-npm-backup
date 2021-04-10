/**
 *  Schema.org/AggregateOffer
 *  When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.
 * 
 *  @author schema.org
 *  @class AggregateOffer
 *  @module org.schema
 *  @extends Offer
 */
var AggregateOffer = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Offer.call(this);
    this.context = "http://schema.org/";
    this.type = "AggregateOffer";
};
AggregateOffer = stjs.extend(AggregateOffer, Offer, [], function(constructor, prototype) {
    /**
     *  Schema.org/offers
     *  An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.
     * 
     *  @property offers
     *  @type Offer
     */
    offers = null;
    /**
     *  Schema.org/offerCount
     *  The number of offers for the product.
     * 
     *  @property offerCount
     *  @type Integer
     */
    offerCount = null;
    /**
     *  Schema.org/lowPrice
     *  The lowest price of all offers available.
     * 
     *  @property lowPrice
     *  @type Text
     */
    lowPrice = null;
    /**
     *  Schema.org/highPrice
     *  The highest price of all offers available.
     * 
     *  @property highPrice
     *  @type Number
     */
    highPrice = null;
}, {offers: "Offer", availableDeliveryMethod: "DeliveryMethod", ineligibleRegion: "GeoShape", reviews: "Review", availability: "ItemAvailability", priceSpecification: "PriceSpecification", inventoryLevel: "QuantitativeValue", aggregateRating: "AggregateRating", eligibleTransactionVolume: "PriceSpecification", availableAtOrFrom: "Place", addOn: "Offer", warranty: "WarrantyPromise", includesObject: "TypeAndQuantityNode", eligibleQuantity: "QuantitativeValue", seller: "Person", deliveryLeadTime: "QuantitativeValue", review: "Review", eligibleCustomerType: "BusinessEntityType", itemCondition: "OfferItemCondition", itemOffered: "Service", offeredBy: "Organization", eligibleDuration: "QuantitativeValue", acceptedPaymentMethod: "LoanOrCredit", areaServed: "Place", businessFunction: "BusinessFunction", advanceBookingRequirement: "QuantitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
