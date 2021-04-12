/**
 * Schema.org/MovieRentalStore
 * A movie rental store.
 *
 * @author schema.org
 * @class MovieRentalStore
 * @module org.schema
 */
public class MovieRentalStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MovieRentalStore";
	}

}