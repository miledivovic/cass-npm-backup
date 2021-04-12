/**
 * Schema.org/BroadcastChannel
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class BroadcastChannel
 * @module org.schema
 */
public class BroadcastChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BroadcastChannel";
	}

}