/**
 * Schema.org/BusStation
 * A bus station.
 *
 * @author schema.org
 * @class BusStation
 * @module org.schema
 */
module.exports = class BusStation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BusStation";
	}

}