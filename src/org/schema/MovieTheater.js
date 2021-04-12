/**
 * Schema.org/MovieTheater
 * A movie theater.
 *
 * @author schema.org
 * @class MovieTheater
 * @module org.schema
 * @extends CivicStructure
 */
public class MovieTheater extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MovieTheater";
	}

}