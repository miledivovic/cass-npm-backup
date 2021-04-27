/**
 * Schema.org/ImageObject
 * An image file.
 *
 * @author schema.org
 * @class ImageObject
 * @module org.schema
 */
module.exports = class ImageObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ImageObject");
	}
};
