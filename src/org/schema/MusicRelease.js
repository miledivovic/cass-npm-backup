const schema = {};
schema.MusicPlaylist = require("./MusicPlaylist.js");
/**
 * Schema.org/MusicRelease
 * A MusicRelease is a specific release of a music album.
 *
 * @author schema.org
 * @class MusicRelease
 * @module org.schema
 * @extends MusicPlaylist
 */
module.exports = class MusicRelease extends schema.MusicPlaylist {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicRelease");
	}

	/**
	 * Schema.org/catalogNumber
	 * The catalog number for the release.
	 *
	 * @property catalogNumber
	 * @type Text
	 */
	catalogNumber;

	/**
	 * Schema.org/releaseOf
	 * The album this is a release of.
	 *
	 * @property releaseOf
	 * @type MusicAlbum
	 */
	releaseOf;

	/**
	 * Schema.org/recordLabel
	 * The label that issued the release.
	 *
	 * @property recordLabel
	 * @type Organization
	 */
	recordLabel;

	/**
	 * Schema.org/creditedTo
	 * The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.
	 *
	 * @property creditedTo
	 * @type Organization
	 */
	creditedTo;

	/**
	 * Schema.org/musicReleaseFormat
	 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
	 *
	 * @property musicReleaseFormat
	 * @type MusicReleaseFormatType
	 */
	musicReleaseFormat;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

}