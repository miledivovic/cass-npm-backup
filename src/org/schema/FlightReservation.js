const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/FlightReservation
 * A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class FlightReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class FlightReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FlightReservation");
	}

	/**
	 * Schema.org/passengerPriorityStatus
	 * The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).
	 *
	 * @property passengerPriorityStatus
	 * @type Text
	 */
	passengerPriorityStatus;

	/**
	 * Schema.org/securityScreening
	 * The type of security screening the passenger is subject to.
	 *
	 * @property securityScreening
	 * @type Text
	 */
	securityScreening;

	/**
	 * Schema.org/boardingGroup
	 * The airline-specific indicator of boarding order / preference.
	 *
	 * @property boardingGroup
	 * @type Text
	 */
	boardingGroup;

	/**
	 * Schema.org/passengerSequenceNumber
	 * The passenger's sequence number as assigned by the airline.
	 *
	 * @property passengerSequenceNumber
	 * @type Text
	 */
	passengerSequenceNumber;

}