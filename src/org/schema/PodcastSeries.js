/**
 * Schema.org/PodcastSeries
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 *
 * @author schema.org
 * @class PodcastSeries
 * @module org.schema
 */
module.exports = class PodcastSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PodcastSeries");
	}

}