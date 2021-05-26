const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Clip
 * A short TV or radio program or a segment/part of a program.
 *
 * @author schema.org
 * @class Clip
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Clip extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Clip");
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
	 * Schema.org/partOfEpisode
	 * The episode to which this clip belongs.
	 *
	 * @property partOfEpisode
	 * @type Episode
	 */
	partOfEpisode;

	/**
	 * Schema.org/clipNumber
	 * Position of the clip within an ordered group of clips.
	 *
	 * @property clipNumber
	 * @type Text
	 */
	clipNumber;

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
	 * Schema.org/endOffset
	 * The end time of the clip expressed as the number of seconds from the beginning of the work.
	 *
	 * @property endOffset
	 * @type HyperTocEntry
	 */
	endOffset;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/partOfSeries
	 * The series to which this episode or season belongs.
	 *
	 * @property partOfSeries
	 * @type CreativeWorkSeries
	 */
	partOfSeries;

	/**
	 * Schema.org/startOffset
	 * The start time of the clip expressed as the number of seconds from the beginning of the work.
	 *
	 * @property startOffset
	 * @type Number
	 */
	startOffset;

}