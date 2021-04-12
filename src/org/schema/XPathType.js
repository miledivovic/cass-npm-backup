/**
 * Schema.org/XPathType
 * Text representing an XPath (typically but not necessarily version 1.0).
 *
 * @author schema.org
 * @class XPathType
 * @module org.schema
 */
public class XPathType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "XPathType";
	}

}