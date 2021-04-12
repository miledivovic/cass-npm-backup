/**
 * Schema.org/SiteNavigationElement
 * A navigation element of the page.
 *
 * @author schema.org
 * @class SiteNavigationElement
 * @module org.schema
 */
module.exports = class SiteNavigationElement extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SiteNavigationElement";
	}

}