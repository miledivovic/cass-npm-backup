/**
 * Schema.org/RsvpResponseType
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 *
 * @author schema.org
 * @class RsvpResponseType
 * @module org.schema
 */
public class RsvpResponseType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RsvpResponseType";
	}

}