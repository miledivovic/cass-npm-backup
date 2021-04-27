/**
 * Schema.org/BookStore
 * A bookstore.
 *
 * @author schema.org
 * @class BookStore
 * @module org.schema
 */
module.exports = class BookStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BookStore");
	}
};
