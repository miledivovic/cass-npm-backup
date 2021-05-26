const schema = {};
schema.CreativeWorkSeason = require("./CreativeWorkSeason.js");
/**
 * Schema.org/PodcastSeason
 * A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used.
 *
 * @author schema.org
 * @class PodcastSeason
 * @module org.schema
 * @extends CreativeWorkSeason
 */
module.exports = class PodcastSeason extends schema.CreativeWorkSeason {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PodcastSeason");
	}

}