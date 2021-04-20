/**
 * Schema.org/TextDigitalDocument
 * A file composed primarily of text.
 *
 * @author schema.org
 * @class TextDigitalDocument
 * @module org.schema
 */
module.exports = class TextDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TextDigitalDocument");
	}

}