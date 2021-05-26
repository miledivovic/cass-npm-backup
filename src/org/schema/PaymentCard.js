const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/PaymentCard
 * A payment method using a credit, debit, store or other card to associate the payment with an account.
 *
 * @author schema.org
 * @class PaymentCard
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class PaymentCard extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PaymentCard");
	}

	/**
	 * Schema.org/cashBack
	 * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
	 *
	 * @property cashBack
	 * @type Boolean
	 */
	cashBack;

	/**
	 * Schema.org/monthlyMinimumRepaymentAmount
	 * The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.
	 *
	 * @property monthlyMinimumRepaymentAmount
	 * @type MonetaryAmount
	 */
	monthlyMinimumRepaymentAmount;

	/**
	 * Schema.org/floorLimit
	 * A floor limit is the amount of money above which credit card transactions must be authorized.
	 *
	 * @property floorLimit
	 * @type MonetaryAmount
	 */
	floorLimit;

	/**
	 * Schema.org/contactlessPayment
	 * A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.
	 *
	 * @property contactlessPayment
	 * @type Boolean
	 */
	contactlessPayment;

}