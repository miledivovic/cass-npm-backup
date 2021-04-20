/**
 * Schema.org/PodcastEpisode
 * A single episode of a podcast series.
 *
 * @author schema.org
 * @class PodcastEpisode
 * @module org.schema
 */
module.exports = class PodcastEpisode extends EcRemoteLinkedData {
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