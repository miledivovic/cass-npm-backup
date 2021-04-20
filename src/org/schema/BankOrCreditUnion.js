/**
 * Schema.org/BankOrCreditUnion
 * Bank or credit union.
 *
 * @author schema.org
 * @class BankOrCreditUnion
 * @module org.schema
 */
module.exports = class BankOrCreditUnion extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BankOrCreditUnion");
	}

}