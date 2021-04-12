/**
 * Schema.org/MovieSeries
 * A series of movies. Included movies can be indicated with the hasPart property.
 *
 * @author schema.org
 * @class MovieSeries
 * @module org.schema
 */
public class MovieSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MovieSeries";
	}

}