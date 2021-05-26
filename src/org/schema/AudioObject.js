const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/AudioObject
 * An audio file.
 *
 * @author schema.org
 * @class AudioObject
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class AudioObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AudioObject");
	}

	/**
	 * Schema.org/transcript
	 * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
	 *
	 * @property transcript
	 * @type Text
	 */
	transcript;

	/**
	 * Schema.org/caption
	 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
	 *
	 * @property caption
	 * @type MediaObject
	 */
	caption;

}