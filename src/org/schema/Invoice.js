const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Invoice
 * A statement of the money due for goods or services; a bill.
 *
 * @author schema.org
 * @class Invoice
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Invoice extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Invoice");
	}

	/**
	 * Schema.org/customer
	 * Party placing the order or paying the invoice.
	 *
	 * @property customer
	 * @type Organization
	 */
	customer;

	/**
	 * Schema.org/billingPeriod
	 * The time interval used to compute the invoice.
	 *
	 * @property billingPeriod
	 * @type Duration
	 */
	billingPeriod;

	/**
	 * Schema.org/totalPaymentDue
	 * The total amount due.
	 *
	 * @property totalPaymentDue
	 * @type MonetaryAmount
	 */
	totalPaymentDue;

	/**
	 * Schema.org/paymentDue
	 * The date that payment is due.
	 *
	 * @property paymentDue
	 * @type DateTime
	 */
	paymentDue;

	/**
	 * Schema.org/minimumPaymentDue
	 * The minimum payment required at this time.
	 *
	 * @property minimumPaymentDue
	 * @type PriceSpecification
	 */
	minimumPaymentDue;

	/**
	 * Schema.org/confirmationNumber
	 * A number that confirms the given order or payment has been received.
	 *
	 * @property confirmationNumber
	 * @type Text
	 */
	confirmationNumber;

	/**
	 * Schema.org/paymentStatus
	 * The status of payment; whether the invoice has been paid or not.
	 *
	 * @property paymentStatus
	 * @type PaymentStatusType
	 */
	paymentStatus;

	/**
	 * Schema.org/paymentMethodId
	 * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
	 *
	 * @property paymentMethodId
	 * @type Text
	 */
	paymentMethodId;

	/**
	 * Schema.org/accountId
	 * The identifier for the account the payment will be applied to.
	 *
	 * @property accountId
	 * @type Text
	 */
	accountId;

	/**
	 * Schema.org/broker
	 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
	 *
	 * @property broker
	 * @type Organization
	 */
	broker;

	/**
	 * Schema.org/referencesOrder
	 * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
	 *
	 * @property referencesOrder
	 * @type Order
	 */
	referencesOrder;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/scheduledPaymentDate
	 * The date the invoice is scheduled to be paid.
	 *
	 * @property scheduledPaymentDate
	 * @type Date
	 */
	scheduledPaymentDate;

	/**
	 * Schema.org/paymentDueDate
	 * The date that payment is due.
	 *
	 * @property paymentDueDate
	 * @type Date
	 */
	paymentDueDate;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/paymentMethod
	 * The name of the credit card or other method of payment for the order.
	 *
	 * @property paymentMethod
	 * @type PaymentMethod
	 */
	paymentMethod;

}