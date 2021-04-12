/**
 * Schema.org/MusicStore
 * A music store.
 *
 * @author schema.org
 * @class MusicStore
 * @module org.schema
 */
module.exports = class MusicStore extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicStore";
	}

}