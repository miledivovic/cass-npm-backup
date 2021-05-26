const schema = {};
schema.Episode = require("./Episode.js");
/**
 * Schema.org/RadioEpisode
 * A radio episode which can be part of a series or season.
 *
 * @author schema.org
 * @class RadioEpisode
 * @module org.schema
 * @extends Episode
 */
module.exports = class RadioEpisode extends schema.Episode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioEpisode");
	}

}