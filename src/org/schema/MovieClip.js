/**
 * Schema.org/MovieClip
 * A short segment/part of a movie.
 *
 * @author schema.org
 * @class MovieClip
 * @module org.schema
 */
module.exports = class MovieClip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MovieClip";
	}

}