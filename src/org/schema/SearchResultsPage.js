/**
 * Schema.org/SearchResultsPage
 * Web page type: Search results page.
 *
 * @author schema.org
 * @class SearchResultsPage
 * @module org.schema
 */
module.exports = class SearchResultsPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "SearchResultsPage");
	}
};
