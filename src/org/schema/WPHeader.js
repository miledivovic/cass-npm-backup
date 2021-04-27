/**
 * Schema.org/WPHeader
 * The header section of the page.
 *
 * @author schema.org
 * @class WPHeader
 * @module org.schema
 */
module.exports = class WPHeader extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "WPHeader");
	}
};
