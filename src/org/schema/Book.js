/**
 * Schema.org/Book
 * A book.
 *
 * @author schema.org
 * @class Book
 * @module org.schema
 */
module.exports = class Book extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "Book");
	}
};
