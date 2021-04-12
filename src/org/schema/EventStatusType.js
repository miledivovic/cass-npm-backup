/**
 * Schema.org/EventStatusType
 * EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
 *
 * @author schema.org
 * @class EventStatusType
 * @module org.schema
 */
public class EventStatusType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EventStatusType";
	}

}