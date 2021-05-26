const schema = {};
schema.DigitalDocument = require("./DigitalDocument.js");
/**
 * Schema.org/PresentationDigitalDocument
 * A file containing slides or used for a presentation.
 *
 * @author schema.org
 * @class PresentationDigitalDocument
 * @module org.schema
 * @extends DigitalDocument
 */
module.exports = class PresentationDigitalDocument extends schema.DigitalDocument {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PresentationDigitalDocument");
	}

}