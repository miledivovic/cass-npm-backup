const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/FoodEstablishmentReservation
 * A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class FoodEstablishmentReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class FoodEstablishmentReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FoodEstablishmentReservation");
	}

	/**
	 * Schema.org/startTime
	 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
	 *
	 * @property startTime
	 * @type DateTime
	 */
	startTime;

	/**
	 * Schema.org/partySize
	 * Number of people the reservation should accommodate.
	 *
	 * @property partySize
	 * @type QuantitativeValue
	 */
	partySize;

	/**
	 * Schema.org/endTime
	 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
	 *
	 * @property endTime
	 * @type DateTime
	 */
	endTime;

}