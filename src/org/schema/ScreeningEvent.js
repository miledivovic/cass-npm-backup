/**
 * Schema.org/ScreeningEvent
 * A screening of a movie or other video.
 *
 * @author schema.org
 * @class ScreeningEvent
 * @module org.schema
 */
module.exports = class ScreeningEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ScreeningEvent");
	}

}