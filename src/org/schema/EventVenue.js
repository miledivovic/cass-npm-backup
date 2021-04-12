/**
 * Schema.org/EventVenue
 * An event venue.
 *
 * @author schema.org
 * @class EventVenue
 * @module org.schema
 */
public class EventVenue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EventVenue";
	}

}