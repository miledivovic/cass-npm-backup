/**
 * Schema.org/FoodEstablishmentReservation
 * A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class FoodEstablishmentReservation
 * @module org.schema
 */
public class FoodEstablishmentReservation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "FoodEstablishmentReservation";
	}

}