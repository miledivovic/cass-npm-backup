/**
 * Schema.org/NoteDigitalDocument
 * A file containing a note, primarily for the author.
 *
 * @author schema.org
 * @class NoteDigitalDocument
 * @module org.schema
 */
public class NoteDigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NoteDigitalDocument";
	}

}