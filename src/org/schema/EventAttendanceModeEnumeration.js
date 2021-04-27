/**
 * Schema.org/EventAttendanceModeEnumeration
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 *
 * @author schema.org
 * @class EventAttendanceModeEnumeration
 * @module org.schema
 */
module.exports = class EventAttendanceModeEnumeration extends
	EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType(
			"http://schema.org/",
			"EventAttendanceModeEnumeration"
		);
	}
};
