/**
 * Schema.org/BusinessEvent
 * Event type: Business event.
 *
 * @author schema.org
 * @class BusinessEvent
 * @module org.schema
 */
module.exports = class BusinessEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BusinessEvent";
	}

}