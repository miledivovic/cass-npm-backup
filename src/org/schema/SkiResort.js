/**
 * Schema.org/SkiResort
 * A ski resort.
 *
 * @author schema.org
 * @class SkiResort
 * @module org.schema
 * @extends Resort
 */
public class SkiResort extends schema.Resort {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "SkiResort";
	}

}