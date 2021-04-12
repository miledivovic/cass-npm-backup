/**
 * Schema.org/Movie
 * A movie.
 *
 * @author schema.org
 * @class Movie
 * @module org.schema
 */
module.exports = class Movie extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Movie";
	}

}