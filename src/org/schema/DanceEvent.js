/**
 * Schema.org/DanceEvent
 * Event type: A social dance.
 *
 * @author schema.org
 * @class DanceEvent
 * @module org.schema
 */
public class DanceEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DanceEvent";
	}

}