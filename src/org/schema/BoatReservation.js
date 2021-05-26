const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/BoatReservation
 * A reservation for boat travel.

Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class BoatReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class BoatReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoatReservation");
	}

}