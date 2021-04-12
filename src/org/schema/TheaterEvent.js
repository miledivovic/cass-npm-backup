/**
 * Schema.org/TheaterEvent
 * Event type: Theater performance.
 *
 * @author schema.org
 * @class TheaterEvent
 * @module org.schema
 */
module.exports = class TheaterEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TheaterEvent";
	}

}