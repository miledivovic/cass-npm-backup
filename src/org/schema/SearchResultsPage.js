/**
 * Schema.org/SearchResultsPage
 * Web page type: Search results page.
 *
 * @author schema.org
 * @class SearchResultsPage
 * @module org.schema
 */
public class SearchResultsPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SearchResultsPage";
	}

}