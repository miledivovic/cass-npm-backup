/**
 * Schema.org/SearchAction
 * The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 *
 * @author schema.org
 * @class SearchAction
 * @module org.schema
 */
module.exports = class SearchAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SearchAction";
	}

}