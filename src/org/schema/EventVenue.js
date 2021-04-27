/**
 * Schema.org/EventVenue
 * An event venue.
 *
 * @author schema.org
 * @class EventVenue
 * @module org.schema
 */
module.exports = class EventVenue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "EventVenue");
	}
};
