/**
 * Schema.org/SocialEvent
 * Event type: Social event.
 *
 * @author schema.org
 * @class SocialEvent
 * @module org.schema
 */
module.exports = class SocialEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SocialEvent";
	}

}