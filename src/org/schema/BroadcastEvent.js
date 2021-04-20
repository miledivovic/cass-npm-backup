/**
 * Schema.org/BroadcastEvent
 * An over the air or online broadcast event.
 *
 * @author schema.org
 * @class BroadcastEvent
 * @module org.schema
 */
module.exports = class BroadcastEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BroadcastEvent");
	}

}