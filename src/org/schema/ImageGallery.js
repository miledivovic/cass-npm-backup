/**
 * Schema.org/ImageGallery
 * Web page type: Image gallery page.
 *
 * @author schema.org
 * @class ImageGallery
 * @module org.schema
 */
module.exports = class ImageGallery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ImageGallery";
	}

}