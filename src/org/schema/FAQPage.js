const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/FAQPage
 * A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)" (see also [[QAPage]]).
 *
 * @author schema.org
 * @class FAQPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class FAQPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FAQPage");
	}

}