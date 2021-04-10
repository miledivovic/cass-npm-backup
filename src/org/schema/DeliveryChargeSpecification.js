/**
 *  Schema.org/DeliveryChargeSpecification
 *  The price for the delivery of an offer using a particular delivery method.
 * 
 *  @author schema.org
 *  @class DeliveryChargeSpecification
 *  @module org.schema
 *  @extends PriceSpecification
 */
var DeliveryChargeSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PriceSpecification.call(this);
    this.context = "http://schema.org/";
    this.type = "DeliveryChargeSpecification";
};
DeliveryChargeSpecification = stjs.extend(DeliveryChargeSpecification, PriceSpecification, [], function(constructor, prototype) {
    /**
     *  Schema.org/ineligibleRegion
     *  The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
     * 
     *  @property ineligibleRegion
     *  @type GeoShape
     */
    ineligibleRegion = null;
    /**
     *  Schema.org/appliesToDeliveryMethod
     *  The delivery method(s) to which the delivery charge or payment charge specification applies.
     * 
     *  @property appliesToDeliveryMethod
     *  @type DeliveryMethod
     */
    appliesToDeliveryMethod = null;
    /**
     *  Schema.org/areaServed
     *  The geographic area where a service or offered item is provided.
     * 
     *  @property areaServed
     *  @type Place
     */
    areaServed = null;
    /**
     *  Schema.org/eligibleRegion
     *  The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
     * 
     *  @property eligibleRegion
     *  @type Text
     */
    eligibleRegion = null;
}, {ineligibleRegion: "GeoShape", appliesToDeliveryMethod: "DeliveryMethod", areaServed: "Place", eligibleTransactionVolume: "PriceSpecification", eligibleQuantity: "QuantitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
