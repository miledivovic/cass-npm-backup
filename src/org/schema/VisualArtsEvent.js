/**
 * Schema.org/VisualArtsEvent
 * Event type: Visual arts event.
 *
 * @author schema.org
 * @class VisualArtsEvent
 * @module org.schema
 */
module.exports = class VisualArtsEvent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VisualArtsEvent";
	}

}