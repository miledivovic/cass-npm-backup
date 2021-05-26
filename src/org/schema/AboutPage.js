const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/AboutPage
 * Web page type: About page.
 *
 * @author schema.org
 * @class AboutPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class AboutPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AboutPage");
	}

}