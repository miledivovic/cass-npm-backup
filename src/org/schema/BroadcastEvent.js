/**
 * Schema.org/BroadcastEvent
 * An over the air or online broadcast event.
 *
 * @author schema.org
 * @class BroadcastEvent
 * @module org.schema
 */
public class BroadcastEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BroadcastEvent";
	}

}