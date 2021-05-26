const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/SearchResultsPage
 * Web page type: Search results page.
 *
 * @author schema.org
 * @class SearchResultsPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class SearchResultsPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SearchResultsPage");
	}

}