const schema = {};
schema.MusicPlaylist = require("./MusicPlaylist.js");
/**
 * Schema.org/MusicAlbum
 * A collection of music tracks.
 *
 * @author schema.org
 * @class MusicAlbum
 * @module org.schema
 * @extends MusicPlaylist
 */
module.exports = class MusicAlbum extends schema.MusicPlaylist {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicAlbum");
	}

	/**
	 * Schema.org/albumProductionType
	 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
	 *
	 * @property albumProductionType
	 * @type MusicAlbumProductionType
	 */
	albumProductionType;

	/**
	 * Schema.org/albumRelease
	 * A release of this album.
	 *
	 * @property albumRelease
	 * @type MusicRelease
	 */
	albumRelease;

	/**
	 * Schema.org/byArtist
	 * The artist that performed this album or recording.
	 *
	 * @property byArtist
	 * @type Person
	 */
	byArtist;

	/**
	 * Schema.org/albumReleaseType
	 * The kind of release which this album is: single, EP or album.
	 *
	 * @property albumReleaseType
	 * @type MusicAlbumReleaseType
	 */
	albumReleaseType;

}