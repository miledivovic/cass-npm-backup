const schema = {};
schema.SoftwareApplication = require("./SoftwareApplication.js");
/**
 * Schema.org/VideoGame
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 *
 * @author schema.org
 * @class VideoGame
 * @module org.schema
 * @extends SoftwareApplication
 */
module.exports = class VideoGame extends schema.SoftwareApplication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGame");
	}

	/**
	 * Schema.org/directors
	 * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property directors
	 * @type Person
	 */
	directors;

	/**
	 * Schema.org/gameServer
	 * The server on which  it is possible to play the game.
	 *
	 * @property gameServer
	 * @type GameServer
	 */
	gameServer;

	/**
	 * Schema.org/playMode
	 * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
	 *
	 * @property playMode
	 * @type GamePlayMode
	 */
	playMode;

	/**
	 * Schema.org/gameTip
	 * Links to tips, tactics, etc.
	 *
	 * @property gameTip
	 * @type CreativeWork
	 */
	gameTip;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/director
	 * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property director
	 * @type Person
	 */
	director;

	/**
	 * Schema.org/musicBy
	 * The composer of the soundtrack.
	 *
	 * @property musicBy
	 * @type MusicGroup
	 */
	musicBy;

	/**
	 * Schema.org/gamePlatform
	 * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
	 *
	 * @property gamePlatform
	 * @type Thing
	 */
	gamePlatform;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/trailer
	 * The trailer of a movie or tv/radio series, season, episode, etc.
	 *
	 * @property trailer
	 * @type VideoObject
	 */
	trailer;

	/**
	 * Schema.org/cheatCode
	 * Cheat codes to the game.
	 *
	 * @property cheatCode
	 * @type CreativeWork
	 */
	cheatCode;

}