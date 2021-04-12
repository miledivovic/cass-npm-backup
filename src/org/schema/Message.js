/**
 * Schema.org/Message
 * A single message from a sender to one or more organizations or people.
 *
 * @author schema.org
 * @class Message
 * @module org.schema
 */
public class Message extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Message";
	}

}