/**
 * Schema.org/ScreeningEvent
 * A screening of a movie or other video.
 *
 * @author schema.org
 * @class ScreeningEvent
 * @module org.schema
 */
public class ScreeningEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ScreeningEvent";
	}

}