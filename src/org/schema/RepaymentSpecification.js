/**
 * Schema.org/RepaymentSpecification
 * A structured value representing repayment.
 *
 * @author schema.org
 * @class RepaymentSpecification
 * @module org.schema
 */
module.exports = class RepaymentSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RepaymentSpecification");
	}

}