const schema = {};
schema.Episode = require("./Episode.js");
/**
 * Schema.org/PodcastEpisode
 * A single episode of a podcast series.
 *
 * @author schema.org
 * @class PodcastEpisode
 * @module org.schema
 * @extends Episode
 */
module.exports = class PodcastEpisode extends schema.Episode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PodcastEpisode");
	}

}