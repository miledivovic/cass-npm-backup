const schema = {};
schema.Periodical = require("./Periodical.js");
/**
 * Schema.org/ComicSeries
 * A sequential publication of comic stories under a
    	unifying title, for example "The Amazing Spider-Man" or "Groo the
    	Wanderer".
 *
 * @author schema.org
 * @class ComicSeries
 * @module org.schema
 * @extends Periodical
 */
module.exports = class ComicSeries extends schema.Periodical {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComicSeries");
	}

}