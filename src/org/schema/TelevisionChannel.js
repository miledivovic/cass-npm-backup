const schema = {};
schema.BroadcastChannel = require("./BroadcastChannel.js");
/**
 * Schema.org/TelevisionChannel
 * A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class TelevisionChannel
 * @module org.schema
 * @extends BroadcastChannel
 */
module.exports = class TelevisionChannel extends schema.BroadcastChannel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TelevisionChannel");
	}

}