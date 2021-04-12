/**
 * Schema.org/TelevisionChannel
 * A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class TelevisionChannel
 * @module org.schema
 */
public class TelevisionChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TelevisionChannel";
	}

}