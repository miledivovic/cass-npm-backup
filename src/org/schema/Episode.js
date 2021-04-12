/**
 * Schema.org/Episode
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 *
 * @author schema.org
 * @class Episode
 * @module org.schema
 */
module.exports = class Episode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Episode";
	}

}