/**
 * Schema.org/ReservationStatusType
 * Enumerated status values for Reservation.
 *
 * @author schema.org
 * @class ReservationStatusType
 * @module org.schema
 */
module.exports = class ReservationStatusType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReservationStatusType";
	}

}