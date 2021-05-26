const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/LodgingReservation
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class LodgingReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class LodgingReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LodgingReservation");
	}

	/**
	 * Schema.org/checkinTime
	 * The earliest someone may check into a lodging establishment.
	 *
	 * @property checkinTime
	 * @type DateTime
	 */
	checkinTime;

	/**
	 * Schema.org/lodgingUnitType
	 * Textual description of the unit type (including suite vs. room, size of bed, etc.).
	 *
	 * @property lodgingUnitType
	 * @type QualitativeValue
	 */
	lodgingUnitType;

	/**
	 * Schema.org/numChildren
	 * The number of children staying in the unit.
	 *
	 * @property numChildren
	 * @type QuantitativeValue
	 */
	numChildren;

	/**
	 * Schema.org/lodgingUnitDescription
	 * A full description of the lodging unit.
	 *
	 * @property lodgingUnitDescription
	 * @type Text
	 */
	lodgingUnitDescription;

	/**
	 * Schema.org/numAdults
	 * The number of adults staying in the unit.
	 *
	 * @property numAdults
	 * @type QuantitativeValue
	 */
	numAdults;

	/**
	 * Schema.org/checkoutTime
	 * The latest someone may check out of a lodging establishment.
	 *
	 * @property checkoutTime
	 * @type DateTime
	 */
	checkoutTime;

}