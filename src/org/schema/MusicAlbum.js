/**
 * Schema.org/MusicAlbum
 * A collection of music tracks.
 *
 * @author schema.org
 * @class MusicAlbum
 * @module org.schema
 */
module.exports = class MusicAlbum extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicAlbum");
	}
};
