/**
 * Schema.org/BusStop
 * A bus stop.
 *
 * @author schema.org
 * @class BusStop
 * @module org.schema
 */
module.exports = class BusStop extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BusStop";
	}

}