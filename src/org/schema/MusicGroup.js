const schema = {};
schema.PerformingGroup = require("./PerformingGroup.js");
/**
 * Schema.org/MusicGroup
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 *
 * @author schema.org
 * @class MusicGroup
 * @module org.schema
 * @extends PerformingGroup
 */
module.exports = class MusicGroup extends schema.PerformingGroup {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicGroup");
	}

	/**
	 * Schema.org/musicGroupMember
	 * A member of a music group&#x2014;for example, John, Paul, George, or Ringo.
	 *
	 * @property musicGroupMember
	 * @type Person
	 */
	musicGroupMember;

	/**
	 * Schema.org/genre
	 * Genre of the creative work, broadcast channel or group.
	 *
	 * @property genre
	 * @type URL
	 */
	genre;

	/**
	 * Schema.org/track
	 * A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
	 *
	 * @property track
	 * @type ItemList
	 */
	track;

	/**
	 * Schema.org/album
	 * A music album.
	 *
	 * @property album
	 * @type MusicAlbum
	 */
	album;

	/**
	 * Schema.org/tracks
	 * A music recording (track)&#x2014;usually a single song.
	 *
	 * @property tracks
	 * @type MusicRecording
	 */
	tracks;

	/**
	 * Schema.org/albums
	 * A collection of music albums.
	 *
	 * @property albums
	 * @type MusicAlbum
	 */
	albums;

}