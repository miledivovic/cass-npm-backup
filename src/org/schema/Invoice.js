/**
 * Schema.org/Invoice
 * A statement of the money due for goods or services; a bill.
 *
 * @author schema.org
 * @class Invoice
 * @module org.schema
 */
module.exports = class Invoice extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Invoice";
	}

}