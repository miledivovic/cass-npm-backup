const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/PaymentStatusType
 * A specific payment status. For example, PaymentDue, PaymentComplete, etc.
 *
 * @author schema.org
 * @class PaymentStatusType
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class PaymentStatusType extends schema.StatusEnumeration {
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