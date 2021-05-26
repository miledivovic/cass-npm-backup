const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MusicPlaylist
 * A collection of music tracks in playlist form.
 *
 * @author schema.org
 * @class MusicPlaylist
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MusicPlaylist extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicPlaylist");
	}

	/**
	 * Schema.org/track
	 * A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
	 *
	 * @property track
	 * @type ItemList
	 */
	track;

	/**
	 * Schema.org/tracks
	 * A music recording (track)&#x2014;usually a single song.
	 *
	 * @property tracks
	 * @type MusicRecording
	 */
	tracks;

	/**
	 * Schema.org/numTracks
	 * The number of tracks in this album or playlist.
	 *
	 * @property numTracks
	 * @type Integer
	 */
	numTracks;

}