const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/CreativeWorkSeason
 * A media season e.g. tv, radio, video game etc.
 *
 * @author schema.org
 * @class CreativeWorkSeason
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class CreativeWorkSeason extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CreativeWorkSeason");
	}

	/**
	 * Schema.org/seasonNumber
	 * Position of the season within an ordered group of seasons.
	 *
	 * @property seasonNumber
	 * @type Integer
	 */
	seasonNumber;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/startDate
	 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property startDate
	 * @type Date
	 */
	startDate;

	/**
	 * Schema.org/director
	 * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property director
	 * @type Person
	 */
	director;

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
	 * Schema.org/endDate
	 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property endDate
	 * @type Date
	 */
	endDate;

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

	/**
	 * Schema.org/partOfSeries
	 * The series to which this episode or season belongs.
	 *
	 * @property partOfSeries
	 * @type CreativeWorkSeries
	 */
	partOfSeries;

}