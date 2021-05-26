const schema = {};
schema.DigitalDocument = require("./DigitalDocument.js");
/**
 * Schema.org/NoteDigitalDocument
 * A file containing a note, primarily for the author.
 *
 * @author schema.org
 * @class NoteDigitalDocument
 * @module org.schema
 * @extends DigitalDocument
 */
module.exports = class NoteDigitalDocument extends schema.DigitalDocument {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NoteDigitalDocument");
	}

}