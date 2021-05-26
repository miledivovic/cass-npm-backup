const schema = {};
schema.MediaGallery = require("./MediaGallery.js");
/**
 * Schema.org/VideoGallery
 * Web page type: Video gallery page.
 *
 * @author schema.org
 * @class VideoGallery
 * @module org.schema
 * @extends MediaGallery
 */
module.exports = class VideoGallery extends schema.MediaGallery {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGallery");
	}

}