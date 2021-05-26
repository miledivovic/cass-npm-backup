const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/BoatTrip
 * A trip on a commercial ferry line.
 *
 * @author schema.org
 * @class BoatTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class BoatTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoatTrip");
	}

	/**
	 * Schema.org/departureBoatTerminal
	 * The terminal or port from which the boat departs.
	 *
	 * @property departureBoatTerminal
	 * @type BoatTerminal
	 */
	departureBoatTerminal;

	/**
	 * Schema.org/arrivalBoatTerminal
	 * The terminal or port from which the boat arrives.
	 *
	 * @property arrivalBoatTerminal
	 * @type BoatTerminal
	 */
	arrivalBoatTerminal;

}