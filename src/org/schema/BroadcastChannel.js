const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/BroadcastChannel
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class BroadcastChannel
 * @module org.schema
 * @extends Intangible
 */
module.exports = class BroadcastChannel extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BroadcastChannel");
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
	 * Schema.org/broadcastChannelId
	 * The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
	 *
	 * @property broadcastChannelId
	 * @type Text
	 */
	broadcastChannelId;

	/**
	 * Schema.org/broadcastServiceTier
	 * The type of service required to have access to the channel (e.g. Standard or Premium).
	 *
	 * @property broadcastServiceTier
	 * @type Text
	 */
	broadcastServiceTier;

	/**
	 * Schema.org/genre
	 * Genre of the creative work, broadcast channel or group.
	 *
	 * @property genre
	 * @type URL
	 */
	genre;

	/**
	 * Schema.org/inBroadcastLineup
	 * The CableOrSatelliteService offering the channel.
	 *
	 * @property inBroadcastLineup
	 * @type CableOrSatelliteService
	 */
	inBroadcastLineup;

	/**
	 * Schema.org/providesBroadcastService
	 * The BroadcastService offered on this channel.
	 *
	 * @property providesBroadcastService
	 * @type BroadcastService
	 */
	providesBroadcastService;

}