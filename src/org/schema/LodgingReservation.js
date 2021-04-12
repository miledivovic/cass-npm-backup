/**
 * Schema.org/LodgingReservation
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class LodgingReservation
 * @module org.schema
 */
public class LodgingReservation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "LodgingReservation";
	}

}