/**
 * Schema.org/RadioChannel
 * A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class RadioChannel
 * @module org.schema
 */
module.exports = class RadioChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "RadioChannel");
	}
};
