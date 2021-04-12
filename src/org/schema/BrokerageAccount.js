/**
 * Schema.org/BrokerageAccount
 * An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm.
 *
 * @author schema.org
 * @class BrokerageAccount
 * @module org.schema
 */
public class BrokerageAccount extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BrokerageAccount";
	}

}