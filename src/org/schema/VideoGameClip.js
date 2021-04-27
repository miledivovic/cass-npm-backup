/**
 * Schema.org/VideoGameClip
 * A short segment/part of a video game.
 *
 * @author schema.org
 * @class VideoGameClip
 * @module org.schema
 */
module.exports = class VideoGameClip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "VideoGameClip");
	}
};
