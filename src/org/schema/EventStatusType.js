/**
 * Schema.org/EventStatusType
 * EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
 *
 * @author schema.org
 * @class EventStatusType
 * @module org.schema
 */
module.exports = class EventStatusType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventStatusType");
	}

}