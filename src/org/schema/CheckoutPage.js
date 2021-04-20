/**
 * Schema.org/CheckoutPage
 * Web page type: Checkout page.
 *
 * @author schema.org
 * @class CheckoutPage
 * @module org.schema
 */
module.exports = class CheckoutPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CheckoutPage");
	}

}