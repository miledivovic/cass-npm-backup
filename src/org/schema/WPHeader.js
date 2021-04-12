/**
 * Schema.org/WPHeader
 * The header section of the page.
 *
 * @author schema.org
 * @class WPHeader
 * @module org.schema
 */
public class WPHeader extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WPHeader";
	}

}