/**
 * Schema.org/TVSeason
 * Season dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeason
 * @module org.schema
 * @extends CreativeWork
 */
public class TVSeason extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TVSeason";
	}

}