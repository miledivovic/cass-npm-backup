/**
 *  Schema.org/Invoice
 *  A statement of the money due for goods or services; a bill.
 * 
 *  @author schema.org
 *  @class Invoice
 *  @module org.schema
 *  @extends Intangible
 */
var Invoice = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Invoice";
};
Invoice = stjs.extend(Invoice, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    prototype.provider = null;
    /**
     *  Schema.org/paymentDue
     *  The date that payment is due.
     * 
     *  @property paymentDue
     *  @type DateTime
     */
    prototype.paymentDue = null;
    /**
     *  Schema.org/billingPeriod
     *  The time interval used to compute the invoice.
     * 
     *  @property billingPeriod
     *  @type Duration
     */
    prototype.billingPeriod = null;
    /**
     *  Schema.org/confirmationNumber
     *  A number that confirms the given order or payment has been received.
     * 
     *  @property confirmationNumber
     *  @type Text
     */
    prototype.confirmationNumber = null;
    /**
     *  Schema.org/scheduledPaymentDate
     *  The date the invoice is scheduled to be paid.
     * 
     *  @property scheduledPaymentDate
     *  @type Date
     */
    prototype.scheduledPaymentDate = null;
    /**
     *  Schema.org/customer
     *  Party placing the order or paying the invoice.
     * 
     *  @property customer
     *  @type Organization
     */
    prototype.customer = null;
    /**
     *  Schema.org/category
     *  A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     * 
     *  @property category
     *  @type Text
     */
    prototype.category = null;
    /**
     *  Schema.org/paymentStatus
     *  The status of payment; whether the invoice has been paid or not.
     * 
     *  @property paymentStatus
     *  @type PaymentStatusType
     */
    prototype.paymentStatus = null;
    /**
     *  Schema.org/broker
     *  An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     * 
     *  @property broker
     *  @type Person
     */
    prototype.broker = null;
    /**
     *  Schema.org/paymentMethod
     *  The name of the credit card or other method of payment for the order.
     * 
     *  @property paymentMethod
     *  @type PaymentMethod
     */
    prototype.paymentMethod = null;
    /**
     *  Schema.org/paymentMethodId
     *  An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     * 
     *  @property paymentMethodId
     *  @type Text
     */
    prototype.paymentMethodId = null;
    /**
     *  Schema.org/minimumPaymentDue
     *  The minimum payment required at this time.
     * 
     *  @property minimumPaymentDue
     *  @type MonetaryAmount
     */
    prototype.minimumPaymentDue = null;
    /**
     *  Schema.org/totalPaymentDue
     *  The total amount due.
     * 
     *  @property totalPaymentDue
     *  @type MonetaryAmount
     */
    prototype.totalPaymentDue = null;
    /**
     *  Schema.org/accountId
     *  The identifier for the account the payment will be applied to.
     * 
     *  @property accountId
     *  @type Text
     */
    prototype.accountId = null;
    /**
     *  Schema.org/referencesOrder
     *  The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
     * 
     *  @property referencesOrder
     *  @type Order
     */
    prototype.referencesOrder = null;
    /**
     *  Schema.org/paymentDueDate
     *  The date that payment is due.
     * 
     *  @property paymentDueDate
     *  @type DateTime
     */
    prototype.paymentDueDate = null;
}, {provider: "Person", billingPeriod: "Duration", customer: "Organization", paymentStatus: "PaymentStatusType", broker: "Person", paymentMethod: "PaymentMethod", minimumPaymentDue: "MonetaryAmount", totalPaymentDue: "MonetaryAmount", referencesOrder: "Order", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
