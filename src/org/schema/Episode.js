const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Episode
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 *
 * @author schema.org
 * @class Episode
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Episode extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Episode");
	}

	/**
	 * Schema.org/partOfSeason
	 * The season to which this episode belongs.
	 *
	 * @property partOfSeason
	 * @type CreativeWorkSeason
	 */
	partOfSeason;

	/**
	 * Schema.org/directors
	 * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property directors
	 * @type Person
	 */
	directors;

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
	 * Schema.org/episodeNumber
	 * Position of the episode within an ordered group of episodes.
	 *
	 * @property episodeNumber
	 * @type Integer
	 */
	episodeNumber;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/productionCompany
	 * The production company or studio responsible for the item e.g. series, video game, episode etc.
	 *
	 * @property productionCompany
	 * @type Organization
	 */
	productionCompany;

	/**
	 * Schema.org/trailer
	 * The trailer of a movie or tv/radio series, season, episode, etc.
	 *
	 * @property trailer
	 * @type VideoObject
	 */
	trailer;

	/**
	 * Schema.org/partOfSeries
	 * The series to which this episode or season belongs.
	 *
	 * @property partOfSeries
	 * @type CreativeWorkSeries
	 */
	partOfSeries;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

}