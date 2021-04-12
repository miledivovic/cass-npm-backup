/**
 * Schema.org/TextDigitalDocument
 * A file composed primarily of text.
 *
 * @author schema.org
 * @class TextDigitalDocument
 * @module org.schema
 */
public class TextDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TextDigitalDocument";
	}

}