/**
 * Schema.org/PresentationDigitalDocument
 * A file containing slides or used for a presentation.
 *
 * @author schema.org
 * @class PresentationDigitalDocument
 * @module org.schema
 */
module.exports = class PresentationDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PresentationDigitalDocument";
	}

}