/**
 * Schema.org/WebPageElement
 * A web page element, like a table or an image.
 *
 * @author schema.org
 * @class WebPageElement
 * @module org.schema
 */
module.exports = class WebPageElement extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebPageElement");
	}

}