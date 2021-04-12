/**
 * Schema.org/BookStore
 * A bookstore.
 *
 * @author schema.org
 * @class BookStore
 * @module org.schema
 */
public class BookStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BookStore";
	}

}