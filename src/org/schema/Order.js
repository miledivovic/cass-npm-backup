const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Order
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *
 * @author schema.org
 * @class Order
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Order extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Order");
	}

	/**
	 * Schema.org/isGift
	 * Was the offer accepted as a gift for someone other than the buyer.
	 *
	 * @property isGift
	 * @type Boolean
	 */
	isGift;

	/**
	 * Schema.org/orderDelivery
	 * The delivery of the parcel related to this order or order item.
	 *
	 * @property orderDelivery
	 * @type ParcelDelivery
	 */
	orderDelivery;

	/**
	 * Schema.org/customer
	 * Party placing the order or paying the invoice.
	 *
	 * @property customer
	 * @type Organization
	 */
	customer;

	/**
	 * Schema.org/acceptedOffer
	 * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
	 *
	 * @property acceptedOffer
	 * @type Offer
	 */
	acceptedOffer;

	/**
	 * Schema.org/discountCurrency
	 * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property discountCurrency
	 * @type Text
	 */
	discountCurrency;

	/**
	 * Schema.org/seller
	 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
	 *
	 * @property seller
	 * @type Organization
	 */
	seller;

	/**
	 * Schema.org/paymentDue
	 * The date that payment is due.
	 *
	 * @property paymentDue
	 * @type DateTime
	 */
	paymentDue;

	/**
	 * Schema.org/confirmationNumber
	 * A number that confirms the given order or payment has been received.
	 *
	 * @property confirmationNumber
	 * @type Text
	 */
	confirmationNumber;

	/**
	 * Schema.org/orderNumber
	 * The identifier of the transaction.
	 *
	 * @property orderNumber
	 * @type Text
	 */
	orderNumber;

	/**
	 * Schema.org/paymentMethodId
	 * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
	 *
	 * @property paymentMethodId
	 * @type Text
	 */
	paymentMethodId;

	/**
	 * Schema.org/billingAddress
	 * The billing address for the order.
	 *
	 * @property billingAddress
	 * @type PostalAddress
	 */
	billingAddress;

	/**
	 * Schema.org/broker
	 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
	 *
	 * @property broker
	 * @type Organization
	 */
	broker;

	/**
	 * Schema.org/paymentUrl
	 * The URL for sending a payment.
	 *
	 * @property paymentUrl
	 * @type URL
	 */
	paymentUrl;

	/**
	 * Schema.org/partOfInvoice
	 * The order is being paid as part of the referenced Invoice.
	 *
	 * @property partOfInvoice
	 * @type Invoice
	 */
	partOfInvoice;

	/**
	 * Schema.org/paymentDueDate
	 * The date that payment is due.
	 *
	 * @property paymentDueDate
	 * @type Date
	 */
	paymentDueDate;

	/**
	 * Schema.org/merchant
	 * 'merchant' is an out-dated term for 'seller'.
	 *
	 * @property merchant
	 * @type Organization
	 */
	merchant;

	/**
	 * Schema.org/orderedItem
	 * The item ordered.
	 *
	 * @property orderedItem
	 * @type OrderItem
	 */
	orderedItem;

	/**
	 * Schema.org/orderDate
	 * Date order was placed.
	 *
	 * @property orderDate
	 * @type DateTime
	 */
	orderDate;

	/**
	 * Schema.org/paymentMethod
	 * The name of the credit card or other method of payment for the order.
	 *
	 * @property paymentMethod
	 * @type PaymentMethod
	 */
	paymentMethod;

	/**
	 * Schema.org/discountCode
	 * Code used to redeem a discount.
	 *
	 * @property discountCode
	 * @type Text
	 */
	discountCode;

	/**
	 * Schema.org/orderStatus
	 * The current status of the order.
	 *
	 * @property orderStatus
	 * @type OrderStatus
	 */
	orderStatus;

	/**
	 * Schema.org/discount
	 * Any discount applied (to an Order).
	 *
	 * @property discount
	 * @type Text
	 */
	discount;

}