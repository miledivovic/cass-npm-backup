const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/VideoObject
 * A video file.
 *
 * @author schema.org
 * @class VideoObject
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class VideoObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoObject");
	}

	/**
	 * Schema.org/directors
	 * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property directors
	 * @type Person
	 */
	directors;

	/**
	 * Schema.org/thumbnail
	 * Thumbnail image for an image or video.
	 *
	 * @property thumbnail
	 * @type ImageObject
	 */
	thumbnail;

	/**
	 * Schema.org/transcript
	 * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
	 *
	 * @property transcript
	 * @type Text
	 */
	transcript;

	/**
	 * Schema.org/videoFrameSize
	 * The frame size of the video.
	 *
	 * @property videoFrameSize
	 * @type Text
	 */
	videoFrameSize;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/director
	 * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property director
	 * @type Person
	 */
	director;

	/**
	 * Schema.org/musicBy
	 * The composer of the soundtrack.
	 *
	 * @property musicBy
	 * @type MusicGroup
	 */
	musicBy;

	/**
	 * Schema.org/videoQuality
	 * The quality of the video.
	 *
	 * @property videoQuality
	 * @type Text
	 */
	videoQuality;

	/**
	 * Schema.org/caption
	 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
	 *
	 * @property caption
	 * @type MediaObject
	 */
	caption;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

}