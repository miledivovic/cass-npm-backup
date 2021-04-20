/**
 * Schema.org/MovieSeries
 * A series of movies. Included movies can be indicated with the hasPart property.
 *
 * @author schema.org
 * @class MovieSeries
 * @module org.schema
 */
module.exports = class MovieSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MovieSeries");
	}

}