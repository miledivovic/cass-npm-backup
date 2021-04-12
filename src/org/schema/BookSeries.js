/**
 * Schema.org/BookSeries
 * A series of books. Included books can be indicated with the hasPart property.
 *
 * @author schema.org
 * @class BookSeries
 * @module org.schema
 */
public class BookSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BookSeries";
	}

}