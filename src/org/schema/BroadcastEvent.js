const schema = {};
schema.PublicationEvent = require("./PublicationEvent.js");
/**
 * Schema.org/BroadcastEvent
 * An over the air or online broadcast event.
 *
 * @author schema.org
 * @class BroadcastEvent
 * @module org.schema
 * @extends PublicationEvent
 */
module.exports = class BroadcastEvent extends schema.PublicationEvent {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BroadcastEvent");
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
	 * Schema.org/broadcastOfEvent
	 * The event being broadcast such as a sporting event or awards ceremony.
	 *
	 * @property broadcastOfEvent
	 * @type Event
	 */
	broadcastOfEvent;

	/**
	 * Schema.org/isLiveBroadcast
	 * True if the broadcast is of a live event.
	 *
	 * @property isLiveBroadcast
	 * @type Boolean
	 */
	isLiveBroadcast;

}