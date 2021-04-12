/**
 * Schema.org/WPFooter
 * The footer section of the page.
 *
 * @author schema.org
 * @class WPFooter
 * @module org.schema
 */
module.exports = class WPFooter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WPFooter";
	}

}