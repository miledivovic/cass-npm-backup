/**
 * Schema.org/EmailMessage
 * An email message.
 *
 * @author schema.org
 * @class EmailMessage
 * @module org.schema
 */
public class EmailMessage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EmailMessage";
	}

}