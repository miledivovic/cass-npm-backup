/**
 * Schema.org/Seat
 * Used to describe a seat, such as a reserved seat in an event reservation.
 *
 * @author schema.org
 * @class Seat
 * @module org.schema
 */
public class Seat extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Seat";
	}

}