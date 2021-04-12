/**
 * Schema.org/MusicEvent
 * Event type: Music event.
 *
 * @author schema.org
 * @class MusicEvent
 * @module org.schema
 */
public class MusicEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicEvent";
	}

}