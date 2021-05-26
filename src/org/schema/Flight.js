const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/Flight
 * An airline flight.
 *
 * @author schema.org
 * @class Flight
 * @module org.schema
 * @extends Trip
 */
module.exports = class Flight extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Flight");
	}

	/**
	 * Schema.org/webCheckinTime
	 * The time when a passenger can check into the flight online.
	 *
	 * @property webCheckinTime
	 * @type DateTime
	 */
	webCheckinTime;

	/**
	 * Schema.org/departureGate
	 * Identifier of the flight's departure gate.
	 *
	 * @property departureGate
	 * @type Text
	 */
	departureGate;

	/**
	 * Schema.org/seller
	 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
	 *
	 * @property seller
	 * @type Organization
	 */
	seller;

	/**
	 * Schema.org/mealService
	 * Description of the meals that will be provided or available for purchase.
	 *
	 * @property mealService
	 * @type Text
	 */
	mealService;

	/**
	 * Schema.org/aircraft
	 * The kind of aircraft (e.g., "Boeing 747").
	 *
	 * @property aircraft
	 * @type Text
	 */
	aircraft;

	/**
	 * Schema.org/arrivalTerminal
	 * Identifier of the flight's arrival terminal.
	 *
	 * @property arrivalTerminal
	 * @type Text
	 */
	arrivalTerminal;

	/**
	 * Schema.org/departureAirport
	 * The airport where the flight originates.
	 *
	 * @property departureAirport
	 * @type Airport
	 */
	departureAirport;

	/**
	 * Schema.org/arrivalGate
	 * Identifier of the flight's arrival gate.
	 *
	 * @property arrivalGate
	 * @type Text
	 */
	arrivalGate;

	/**
	 * Schema.org/departureTerminal
	 * Identifier of the flight's departure terminal.
	 *
	 * @property departureTerminal
	 * @type Text
	 */
	departureTerminal;

	/**
	 * Schema.org/arrivalAirport
	 * The airport where the flight terminates.
	 *
	 * @property arrivalAirport
	 * @type Airport
	 */
	arrivalAirport;

	/**
	 * Schema.org/boardingPolicy
	 * The type of boarding policy used by the airline (e.g. zone-based or group-based).
	 *
	 * @property boardingPolicy
	 * @type BoardingPolicyType
	 */
	boardingPolicy;

	/**
	 * Schema.org/carrier
	 * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
	 *
	 * @property carrier
	 * @type Organization
	 */
	carrier;

	/**
	 * Schema.org/flightNumber
	 * The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
	 *
	 * @property flightNumber
	 * @type Text
	 */
	flightNumber;

	/**
	 * Schema.org/flightDistance
	 * The distance of the flight.
	 *
	 * @property flightDistance
	 * @type Distance
	 */
	flightDistance;

	/**
	 * Schema.org/estimatedFlightDuration
	 * The estimated time the flight will take.
	 *
	 * @property estimatedFlightDuration
	 * @type Text
	 */
	estimatedFlightDuration;

}