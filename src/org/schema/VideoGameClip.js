/**
 * Schema.org/VideoGameClip
 * A short segment/part of a video game.
 *
 * @author schema.org
 * @class VideoGameClip
 * @module org.schema
 */
public class VideoGameClip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VideoGameClip";
	}

}