/**
 * Schema.org/DigitalDocument
 * An electronic file or document.
 *
 * @author schema.org
 * @class DigitalDocument
 * @module org.schema
 */
module.exports = class DigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DigitalDocument");
	}

}