/**
 * Schema.org/RsvpAction
 * The act of notifying an event organizer as to whether you expect to attend the event.
 *
 * @author schema.org
 * @class RsvpAction
 * @module org.schema
 */
module.exports = class RsvpAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RsvpAction");
	}

}