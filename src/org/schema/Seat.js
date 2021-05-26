const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Seat
 * Used to describe a seat, such as a reserved seat in an event reservation.
 *
 * @author schema.org
 * @class Seat
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Seat extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Seat");
	}

	/**
	 * Schema.org/seatingType
	 * The type/class of the seat.
	 *
	 * @property seatingType
	 * @type QualitativeValue
	 */
	seatingType;

	/**
	 * Schema.org/seatSection
	 * The section location of the reserved seat (e.g. Orchestra).
	 *
	 * @property seatSection
	 * @type Text
	 */
	seatSection;

	/**
	 * Schema.org/seatNumber
	 * The location of the reserved seat (e.g., 27).
	 *
	 * @property seatNumber
	 * @type Text
	 */
	seatNumber;

	/**
	 * Schema.org/seatRow
	 * The row location of the reserved seat (e.g., B).
	 *
	 * @property seatRow
	 * @type Text
	 */
	seatRow;

}