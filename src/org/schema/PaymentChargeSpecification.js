/**
 *  Schema.org/PaymentChargeSpecification
 *  The costs of settling the payment using a particular payment method.
 * 
 *  @author schema.org
 *  @class PaymentChargeSpecification
 *  @module org.schema
 *  @extends PriceSpecification
 */
var PaymentChargeSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PriceSpecification.call(this);
    this.context = "http://schema.org/";
    this.type = "PaymentChargeSpecification";
};
PaymentChargeSpecification = stjs.extend(PaymentChargeSpecification, PriceSpecification, [], function(constructor, prototype) {
    /**
     *  Schema.org/appliesToPaymentMethod
     *  The payment method(s) to which the payment charge specification applies.
     * 
     *  @property appliesToPaymentMethod
     *  @type PaymentMethod
     */
    appliesToPaymentMethod = null;
    /**
     *  Schema.org/appliesToDeliveryMethod
     *  The delivery method(s) to which the delivery charge or payment charge specification applies.
     * 
     *  @property appliesToDeliveryMethod
     *  @type DeliveryMethod
     */
    appliesToDeliveryMethod = null;
}, {appliesToPaymentMethod: "PaymentMethod", appliesToDeliveryMethod: "DeliveryMethod", eligibleTransactionVolume: "PriceSpecification", eligibleQuantity: "QuantitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
