/**
 * Schema.org/ComedyEvent
 * Event type: Comedy event.
 *
 * @author schema.org
 * @class ComedyEvent
 * @module org.schema
 */
public class ComedyEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ComedyEvent";
	}

}