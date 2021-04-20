/**
 * Schema.org/XPathType
 * Text representing an XPath (typically but not necessarily version 1.0).
 *
 * @author schema.org
 * @class XPathType
 * @module org.schema
 */
module.exports = class XPathType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","XPathType");
	}

}