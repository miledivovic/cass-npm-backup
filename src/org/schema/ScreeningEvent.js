const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/ScreeningEvent
 * A screening of a movie or other video.
 *
 * @author schema.org
 * @class ScreeningEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class ScreeningEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ScreeningEvent");
	}

	/**
	 * Schema.org/subtitleLanguage
	 * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
	 *
	 * @property subtitleLanguage
	 * @type Text
	 */
	subtitleLanguage;

	/**
	 * Schema.org/videoFormat
	 * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
	 *
	 * @property videoFormat
	 * @type Text
	 */
	videoFormat;

	/**
	 * Schema.org/workPresented
	 * The movie presented during this event.
	 *
	 * @property workPresented
	 * @type Movie
	 */
	workPresented;

}