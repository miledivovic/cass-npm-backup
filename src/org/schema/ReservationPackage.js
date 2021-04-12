/**
 * Schema.org/ReservationPackage
 * A group of multiple reservations with common values for all sub-reservations.
 *
 * @author schema.org
 * @class ReservationPackage
 * @module org.schema
 */
module.exports = class ReservationPackage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ReservationPackage";
	}

}