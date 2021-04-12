/**
 * Schema.org/LiteraryEvent
 * Event type: Literary event.
 *
 * @author schema.org
 * @class LiteraryEvent
 * @module org.schema
 */
public class LiteraryEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LiteraryEvent";
	}

}