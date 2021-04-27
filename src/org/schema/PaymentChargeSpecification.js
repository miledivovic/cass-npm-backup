/**
 * Schema.org/PaymentChargeSpecification
 * The costs of settling the payment using a particular payment method.
 *
 * @author schema.org
 * @class PaymentChargeSpecification
 * @module org.schema
 */
module.exports = class PaymentChargeSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"PaymentChargeSpecification"
		);
	}
};
