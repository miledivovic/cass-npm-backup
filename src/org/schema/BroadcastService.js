const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/BroadcastService
 * A delivery service through which content is provided via broadcast over the air or online.
 *
 * @author schema.org
 * @class BroadcastService
 * @module org.schema
 * @extends Service
 */
module.exports = class BroadcastService extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BroadcastService");
	}

	/**
	 * Schema.org/broadcastFrequency
	 * The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
	 *
	 * @property broadcastFrequency
	 * @type Text
	 */
	broadcastFrequency;

	/**
	 * Schema.org/videoFormat
	 * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
	 *
	 * @property videoFormat
	 * @type Text
	 */
	videoFormat;

	/**
	 * Schema.org/parentService
	 * A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
	 *
	 * @property parentService
	 * @type BroadcastService
	 */
	parentService;

	/**
	 * Schema.org/broadcastDisplayName
	 * The name displayed in the channel guide. For many US affiliates, it is the network name.
	 *
	 * @property broadcastDisplayName
	 * @type Text
	 */
	broadcastDisplayName;

	/**
	 * Schema.org/broadcastAffiliateOf
	 * The media network(s) whose content is broadcast on this station.
	 *
	 * @property broadcastAffiliateOf
	 * @type Organization
	 */
	broadcastAffiliateOf;

	/**
	 * Schema.org/broadcastTimezone
	 * The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts
	 *
	 * @property broadcastTimezone
	 * @type Text
	 */
	broadcastTimezone;

	/**
	 * Schema.org/area
	 * The area within which users can expect to reach the broadcast service.
	 *
	 * @property area
	 * @type Place
	 */
	area;

	/**
	 * Schema.org/broadcaster
	 * The organization owning or operating the broadcast service.
	 *
	 * @property broadcaster
	 * @type Organization
	 */
	broadcaster;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

	/**
	 * Schema.org/hasBroadcastChannel
	 * A broadcast channel of a broadcast service.
	 *
	 * @property hasBroadcastChannel
	 * @type BroadcastChannel
	 */
	hasBroadcastChannel;

	/**
	 * Schema.org/callSign
	 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
	 *
	 * @property callSign
	 * @type Text
	 */
	callSign;

}