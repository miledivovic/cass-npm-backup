/**
 * Schema.org/DanceEvent
 * Event type: A social dance.
 *
 * @author schema.org
 * @class DanceEvent
 * @module org.schema
 */
module.exports = class DanceEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DanceEvent");
	}

}