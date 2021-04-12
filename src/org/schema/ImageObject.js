/**
 * Schema.org/ImageObject
 * An image file.
 *
 * @author schema.org
 * @class ImageObject
 * @module org.schema
 */
public class ImageObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ImageObject";
	}

}