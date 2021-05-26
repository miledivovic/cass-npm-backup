const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/TVSeason
 * Season dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeason
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class TVSeason extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVSeason");
	}

	/**
	 * Schema.org/countryOfOrigin
	 * The country of the principal offices of the production company or individual responsible for the movie or program.
	 *
	 * @property countryOfOrigin
	 * @type Country
	 */
	countryOfOrigin;

	/**
	 * Schema.org/partOfTVSeries
	 * The TV series to which this episode or season belongs.
	 *
	 * @property partOfTVSeries
	 * @type TVSeries
	 */
	partOfTVSeries;

}