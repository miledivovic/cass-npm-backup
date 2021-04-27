/**
 * Schema.org/MusicEvent
 * Event type: Music event.
 *
 * @author schema.org
 * @class MusicEvent
 * @module org.schema
 */
module.exports = class MusicEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicEvent");
	}
};
