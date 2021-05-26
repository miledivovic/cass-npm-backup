const schema = {};
schema.CollectionPage = require("./CollectionPage.js");
/**
 * Schema.org/MediaGallery
 * Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.
 *
 * @author schema.org
 * @class MediaGallery
 * @module org.schema
 * @extends CollectionPage
 */
module.exports = class MediaGallery extends schema.CollectionPage {
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