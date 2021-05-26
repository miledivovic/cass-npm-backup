const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/SportsEvent
 * Event type: Sports event.
 *
 * @author schema.org
 * @class SportsEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class SportsEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsEvent");
	}

	/**
	 * Schema.org/competitor
	 * A competitor in a sports event.
	 *
	 * @property competitor
	 * @type Person
	 */
	competitor;

	/**
	 * Schema.org/awayTeam
	 * The away team in a sports event.
	 *
	 * @property awayTeam
	 * @type SportsTeam
	 */
	awayTeam;

	/**
	 * Schema.org/homeTeam
	 * The home team in a sports event.
	 *
	 * @property homeTeam
	 * @type SportsTeam
	 */
	homeTeam;

	/**
	 * Schema.org/sport
	 * A type of sport (e.g. Baseball).
	 *
	 * @property sport
	 * @type URL
	 */
	sport;

}