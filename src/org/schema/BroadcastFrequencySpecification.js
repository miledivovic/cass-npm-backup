const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/BroadcastFrequencySpecification
 * The frequency in MHz and the modulation used for a particular BroadcastService.
 *
 * @author schema.org
 * @class BroadcastFrequencySpecification
 * @module org.schema
 * @extends Intangible
 */
module.exports = class BroadcastFrequencySpecification extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BroadcastFrequencySpecification");
	}

	/**
	 * Schema.org/broadcastSubChannel
	 * The subchannel used for the broadcast.
	 *
	 * @property broadcastSubChannel
	 * @type Text
	 */
	broadcastSubChannel;

	/**
	 * Schema.org/broadcastSignalModulation
	 * The modulation (e.g. FM, AM, etc) used by a particular broadcast service.
	 *
	 * @property broadcastSignalModulation
	 * @type QualitativeValue
	 */
	broadcastSignalModulation;

	/**
	 * Schema.org/broadcastFrequencyValue
	 * The frequency in MHz for a particular broadcast.
	 *
	 * @property broadcastFrequencyValue
	 * @type Number
	 */
	broadcastFrequencyValue;

}