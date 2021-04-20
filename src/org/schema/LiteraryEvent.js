/**
 * Schema.org/LiteraryEvent
 * Event type: Literary event.
 *
 * @author schema.org
 * @class LiteraryEvent
 * @module org.schema
 */
module.exports = class LiteraryEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LiteraryEvent");
	}

}