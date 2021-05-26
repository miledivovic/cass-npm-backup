const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/CheckoutPage
 * Web page type: Checkout page.
 *
 * @author schema.org
 * @class CheckoutPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class CheckoutPage extends schema.WebPage {
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