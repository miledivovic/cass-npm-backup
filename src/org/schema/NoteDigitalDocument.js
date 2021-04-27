/**
 * Schema.org/NoteDigitalDocument
 * A file containing a note, primarily for the author.
 *
 * @author schema.org
 * @class NoteDigitalDocument
 * @module org.schema
 */
module.exports = class NoteDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "NoteDigitalDocument");
	}
};
