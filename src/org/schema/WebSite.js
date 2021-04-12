/**
 * Schema.org/WebSite
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 *
 * @author schema.org
 * @class WebSite
 * @module org.schema
 */
module.exports = class WebSite extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WebSite";
	}

}