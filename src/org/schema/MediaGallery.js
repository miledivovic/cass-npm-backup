/**
 * Schema.org/MediaGallery
 * Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.
 *
 * @author schema.org
 * @class MediaGallery
 * @module org.schema
 */
module.exports = class MediaGallery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MediaGallery");
	}

}