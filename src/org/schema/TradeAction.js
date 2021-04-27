/**
 * Schema.org/TradeAction
 * The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
 *
 * @author schema.org
 * @class TradeAction
 * @module org.schema
 */
module.exports = class TradeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "TradeAction");
	}
};
