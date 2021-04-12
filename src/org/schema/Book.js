/**
 * Schema.org/Book
 * A book.
 *
 * @author schema.org
 * @class Book
 * @module org.schema
 */
public class Book extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Book";
	}

}