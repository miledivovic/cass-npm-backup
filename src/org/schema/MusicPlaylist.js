/**
 * Schema.org/MusicPlaylist
 * A collection of music tracks in playlist form.
 *
 * @author schema.org
 * @class MusicPlaylist
 * @module org.schema
 */
module.exports = class MusicPlaylist extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "MusicPlaylist");
	}
};
