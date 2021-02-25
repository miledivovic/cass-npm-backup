/**
 *  Schema.org/Order
 *  An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * 
 *  @author schema.org
 *  @class Order
 *  @module org.schema
 *  @extends Intangible
 */
var Order = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "Order";
};
Order = stjs.extend(Order, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/orderDate
     *  Date order was placed.
     * 
     *  @property orderDate
     *  @type DateTime
     */
    prototype.orderDate = null;
    /**
     *  Schema.org/paymentDue
     *  The date that payment is due.
     * 
     *  @property paymentDue
     *  @type DateTime
     */
    prototype.paymentDue = null;
    /**
     *  Schema.org/orderNumber
     *  The identifier of the transaction.
     * 
     *  @property orderNumber
     *  @type Text
     */
    prototype.orderNumber = null;
    /**
     *  Schema.org/paymentUrl
     *  The URL for sending a payment.
     * 
     *  @property paymentUrl
     *  @type URL
     */
    prototype.paymentUrl = null;
    /**
     *  Schema.org/orderStatus
     *  The current status of the order.
     * 
     *  @property orderStatus
     *  @type OrderStatus
     */
    prototype.orderStatus = null;
    /**
     *  Schema.org/billingAddress
     *  The billing address for the order.
     * 
     *  @property billingAddress
     *  @type PostalAddress
     */
    prototype.billingAddress = null;
    /**
     *  Schema.org/partOfInvoice
     *  The order is being paid as part of the referenced Invoice.
     * 
     *  @property partOfInvoice
     *  @type Invoice
     */
    prototype.partOfInvoice = null;
    /**
     *  Schema.org/confirmationNumber
     *  A number that confirms the given order or payment has been received.
     * 
     *  @property confirmationNumber
     *  @type Text
     */
    prototype.confirmationNumber = null;
    /**
     *  Schema.org/customer
     *  Party placing the order or paying the invoice.
     * 
     *  @property customer
     *  @type Organization
     */
    prototype.customer = null;
    /**
     *  Schema.org/merchant
     *  'merchant' is an out-dated term for 'seller'.
     * 
     *  @property merchant
     *  @type Person
     */
    prototype.merchant = null;
    /**
     *  Schema.org/broker
     *  An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     * 
     *  @property broker
     *  @type Person
     */
    prototype.broker = null;
    /**
     *  Schema.org/orderedItem
     *  The item ordered.
     * 
     *  @property orderedItem
     *  @type Product
     */
    prototype.orderedItem = null;
    /**
     *  Schema.org/isGift
     *  Was the offer accepted as a gift for someone other than the buyer.
     * 
     *  @property isGift
     *  @type Boolean
     */
    prototype.isGift = null;
    /**
     *  Schema.org/paymentMethod
     *  The name of the credit card or other method of payment for the order.
     * 
     *  @property paymentMethod
     *  @type PaymentMethod
     */
    prototype.paymentMethod = null;
    /**
     *  Schema.org/seller
     *  An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * 
     *  @property seller
     *  @type Person
     */
    prototype.seller = null;
    /**
     *  Schema.org/paymentMethodId
     *  An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     * 
     *  @property paymentMethodId
     *  @type Text
     */
    prototype.paymentMethodId = null;
    /**
     *  Schema.org/discount
     *  Any discount applied (to an Order).
     * 
     *  @property discount
     *  @type Number
     */
    prototype.discount = null;
    /**
     *  Schema.org/orderDelivery
     *  The delivery of the parcel related to this order or order item.
     * 
     *  @property orderDelivery
     *  @type ParcelDelivery
     */
    prototype.orderDelivery = null;
    /**
     *  Schema.org/acceptedOffer
     *  The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
     * 
     *  @property acceptedOffer
     *  @type Offer
     */
    prototype.acceptedOffer = null;
    /**
     *  Schema.org/discountCurrency
     *  The currency (in 3-letter ISO 4217 format) of the discount.
     * 
     *  @property discountCurrency
     *  @type Text
     */
    prototype.discountCurrency = null;
    /**
     *  Schema.org/paymentDueDate
     *  The date that payment is due.
     * 
     *  @property paymentDueDate
     *  @type DateTime
     */
    prototype.paymentDueDate = null;
    /**
     *  Schema.org/discountCode
     *  Code used to redeem a discount.
     * 
     *  @property discountCode
     *  @type Text
     */
    prototype.discountCode = null;
}, {orderStatus: "OrderStatus", billingAddress: "PostalAddress", partOfInvoice: "Invoice", customer: "Organization", merchant: "Person", broker: "Person", orderedItem: "Product", paymentMethod: "PaymentMethod", seller: "Person", orderDelivery: "ParcelDelivery", acceptedOffer: "Offer", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
