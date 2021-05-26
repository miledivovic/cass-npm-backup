const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/RadioSeries
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 *
 * @author schema.org
 * @class RadioSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class RadioSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioSeries");
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
	 * Schema.org/seasons
	 * A season in a media series.
	 *
	 * @property seasons
	 * @type CreativeWorkSeason
	 */
	seasons;

	/**
	 * Schema.org/season
	 * A season in a media series.
	 *
	 * @property season
	 * @type CreativeWorkSeason
	 */
	season;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/numberOfSeasons
	 * The number of seasons in this series.
	 *
	 * @property numberOfSeasons
	 * @type Integer
	 */
	numberOfSeasons;

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
	 * Schema.org/numberOfEpisodes
	 * The number of episodes in this season or series.
	 *
	 * @property numberOfEpisodes
	 * @type Integer
	 */
	numberOfEpisodes;

	/**
	 * Schema.org/episodes
	 * An episode of a TV/radio series or season.
	 *
	 * @property episodes
	 * @type Episode
	 */
	episodes;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/containsSeason
	 * A season that is part of the media series.
	 *
	 * @property containsSeason
	 * @type CreativeWorkSeason
	 */
	containsSeason;

	/**
	 * Schema.org/episode
	 * An episode of a tv, radio or game media within a series or season.
	 *
	 * @property episode
	 * @type Episode
	 */
	episode;

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

}