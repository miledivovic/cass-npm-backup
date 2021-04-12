/**
 * Schema.org/PodcastSeason
 * A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used.
 *
 * @author schema.org
 * @class PodcastSeason
 * @module org.schema
 */
module.exports = class PodcastSeason extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PodcastSeason";
	}

}