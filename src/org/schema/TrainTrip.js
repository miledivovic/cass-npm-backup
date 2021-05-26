const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/TrainTrip
 * A trip on a commercial train line.
 *
 * @author schema.org
 * @class TrainTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class TrainTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrainTrip");
	}

	/**
	 * Schema.org/arrivalPlatform
	 * The platform where the train arrives.
	 *
	 * @property arrivalPlatform
	 * @type Text
	 */
	arrivalPlatform;

	/**
	 * Schema.org/departurePlatform
	 * The platform from which the train departs.
	 *
	 * @property departurePlatform
	 * @type Text
	 */
	departurePlatform;

	/**
	 * Schema.org/departureStation
	 * The station from which the train departs.
	 *
	 * @property departureStation
	 * @type TrainStation
	 */
	departureStation;

	/**
	 * Schema.org/trainNumber
	 * The unique identifier for the train.
	 *
	 * @property trainNumber
	 * @type Text
	 */
	trainNumber;

	/**
	 * Schema.org/arrivalStation
	 * The station where the train trip ends.
	 *
	 * @property arrivalStation
	 * @type TrainStation
	 */
	arrivalStation;

	/**
	 * Schema.org/trainName
	 * The name of the train (e.g. The Orient Express).
	 *
	 * @property trainName
	 * @type Text
	 */
	trainName;

}