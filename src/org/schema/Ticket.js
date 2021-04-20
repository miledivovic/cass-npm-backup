/**
 * Schema.org/Ticket
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 *
 * @author schema.org
 * @class Ticket
 * @module org.schema
 */
module.exports = class Ticket extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Ticket");
	}

}