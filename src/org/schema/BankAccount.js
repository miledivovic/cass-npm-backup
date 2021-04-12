/**
 * Schema.org/BankAccount
 * A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
 *
 * @author schema.org
 * @class BankAccount
 * @module org.schema
 */
public class BankAccount extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BankAccount";
	}

}