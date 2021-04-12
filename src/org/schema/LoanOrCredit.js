/**
 * Schema.org/LoanOrCredit
 * A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 *
 * @author schema.org
 * @class LoanOrCredit
 * @module org.schema
 */
module.exports = class LoanOrCredit extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LoanOrCredit";
	}

}