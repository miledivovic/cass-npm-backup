/**
 * Schema.org/SportsEvent
 * Event type: Sports event.
 *
 * @author schema.org
 * @class SportsEvent
 * @module org.schema
 */
public class SportsEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SportsEvent";
	}

}