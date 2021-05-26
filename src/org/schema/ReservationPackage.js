const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/ReservationPackage
 * A group of multiple reservations with common values for all sub-reservations.
 *
 * @author schema.org
 * @class ReservationPackage
 * @module org.schema
 * @extends Reservation
 */
module.exports = class ReservationPackage extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReservationPackage");
	}

	/**
	 * Schema.org/subReservation
	 * The individual reservations included in the package. Typically a repeated property.
	 *
	 * @property subReservation
	 * @type Reservation
	 */
	subReservation;

}