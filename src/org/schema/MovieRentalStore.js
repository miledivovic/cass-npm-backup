/**
 * Schema.org/MovieRentalStore
 * A movie rental store.
 *
 * @author schema.org
 * @class MovieRentalStore
 * @module org.schema
 */
module.exports = class MovieRentalStore extends EcRemoteLinkedData {
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