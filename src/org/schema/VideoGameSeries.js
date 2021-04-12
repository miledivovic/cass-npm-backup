/**
 * Schema.org/VideoGameSeries
 * A video game series.
 *
 * @author schema.org
 * @class VideoGameSeries
 * @module org.schema
 */
module.exports = class VideoGameSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VideoGameSeries";
	}

}