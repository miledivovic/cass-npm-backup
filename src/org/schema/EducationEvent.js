/**
 * Schema.org/EducationEvent
 * Event type: Education event.
 *
 * @author schema.org
 * @class EducationEvent
 * @module org.schema
 */
module.exports = class EducationEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EducationEvent";
	}

}