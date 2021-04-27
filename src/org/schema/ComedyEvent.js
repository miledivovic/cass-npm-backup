/**
 * Schema.org/ComedyEvent
 * Event type: Comedy event.
 *
 * @author schema.org
 * @class ComedyEvent
 * @module org.schema
 */
module.exports = class ComedyEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "ComedyEvent");
	}
};
