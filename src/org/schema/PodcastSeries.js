const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/PodcastSeries
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 *
 * @author schema.org
 * @class PodcastSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class PodcastSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PodcastSeries");
	}

	/**
	 * Schema.org/webFeed
	 * The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom.
	 *
	 * @property webFeed
	 * @type URL
	 */
	webFeed;

}