/**
 * Schema.org/MusicAlbumReleaseType
 * The kind of release which this album is: single, EP or album.
 *
 * @author schema.org
 * @class MusicAlbumReleaseType
 * @module org.schema
 */
module.exports = class MusicAlbumReleaseType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicAlbumReleaseType";
	}

}