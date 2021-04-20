/**
 * Schema.org/PaymentStatusType
 * A specific payment status. For example, PaymentDue, PaymentComplete, etc.
 *
 * @author schema.org
 * @class PaymentStatusType
 * @module org.schema
 */
module.exports = class PaymentStatusType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PaymentStatusType");
	}

}